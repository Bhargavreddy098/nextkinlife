import json, re, os

os.chdir('/home/z/my-project/scripts/scrape')
pages = ['home','about','services','custom-web-applications','data-engineering-analytics',
         'ai-integration','cloud-services','enterprise-software-development',
         'it-consulting','innovationsandpatents','careers','contact']

out = []
for p in pages:
    try:
        d = json.load(open(f'{p}.json'))
        data = d.get('data', d)
        html = data.get('html','')
        # strip scripts/styles
        html = re.sub(r'<script[^>]*>.*?</script>','',html,flags=re.S)
        html = re.sub(r'<style[^>]*>.*?</style>','',html,flags=re.S)
        # keep block boundaries
        html = re.sub(r'</(p|h1|h2|h3|h4|h5|li|div|section|tr)>','\n',html)
        html = re.sub(r'<br\s*/?>','\n',html)
        text = re.sub(r'<[^>]+>',' ',html)
        text = re.sub(r'&amp;','&',text)
        text = re.sub(r'&nbsp;',' ',text)
        text = re.sub(r'&#\d+;','',text)
        # collapse spaces per line
        lines = [re.sub(r'\s+',' ',l).strip() for l in text.split('\n')]
        lines = [l for l in lines if l and len(l) > 2]
        # de-dup consecutive
        dedup = []
        for l in lines:
            if not dedup or dedup[-1] != l:
                dedup.append(l)
        out.append(f"\n{'='*80}\nPAGE: {p}\nTITLE: {data.get('title')}\n{'='*80}\n" + '\n'.join(dedup))
    except Exception as e:
        out.append(f"\n{'='*80}\nPAGE: {p}\nERROR: {e}\n{'='*80}")

open('all_text.txt','w').write('\n'.join(out))
print("written", os.path.getsize('all_text.txt'), "bytes")
