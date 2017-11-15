for (;;)
{
var macro, lp, nxt, last, retcode, captcha = "#EANF#";

macro = "CODE:";
macro += "SET !EXTRACT_TEST_POPUP NO\n";
macro += "SET !ERRORIGNORE YES\n";
macro += "TAB T=1\n";
macro += "TAB CLOSEALLOTHERS\n";
macro += "URL GOTO=https://faucetpig.com/index\n";
macro += "WAIT SECONDS=1\n";
macro += "FILEDELETE NAME=C:\\media.png\n";
macro += "ONDOWNLOAD FOLDER=C:\\ FILE=media.png\n";
macro += "WAIT SECONDS=1\n";
macro += "TAG POS=1 TYPE=DIV ATTR=ID:adcopy-puzzle-image CONTENT=EVENT:SAVE_ELEMENT_SCREENSHOT\n";
macro += "TAB OPEN\n";
macro += "TAB T=2\n";
macro += "URL GOTO=http://www.9kw.eu/grafik/form.html\n";
macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/index.cgi ATTR=NAME:apikey CONTENT=4OXJPSAMAXJYVKCRQB\n";
macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/index.cgi ATTR=NAME:source CONTENT=imacros\n";
macro += "TAG POS=1 TYPE=INPUT:TEXT FORM=ACTION:/index.cgi ATTR=NAME:prio CONTENT=0\n";
macro += "TAG POS=1 TYPE=INPUT:FILE FORM=ACTION:/index.cgi ATTR=NAME:file-upload-01 CONTENT=C:\\media.png\n";
macro += "WAIT SECONDS=1\n";
macro += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/index.cgi ATTR=ID:newsubmit\n";
macro += "WAIT SECONDS=10\n";
macro += "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:result EXTRACT=TXT\n";
iimPlay(macro);
captcha = iimGetExtract();

while (captcha == "#EANF#")
{
	lp = "CODE:WAIT SECONDS=5\n";
	lp += "TAG POS=1 TYPE=INPUT:TEXT ATTR=NAME:result EXTRACT=TXT\n";
	iimPlay(lp);
	captcha = iimGetExtract();	
}

nxt = 'CODE:TAB CLOSE\n';
nxt += 'TAG POS=1 TYPE=INPUT:TEXT ATTR=ID:adcopy_response CONTENT="'+ captcha +'"\n';
nxt += 'WAIT SECONDS=1\n';
nxt += 'TAG POS=1 TYPE=A ATTR=TXT:Claim<SP>Satoshis\n';
nxt += 'WAIT SECONDS=1\n';
nxt += 'TAG POS=1 TYPE=* ATTR=TXT:*The<SP>captcha<SP>you<SP>entered<SP>is<SP>not<SP>valid.*';
iimPlay(nxt);

retcode = iimGetErrorText();
if (retcode == "OK") { continue; }
iimPlay('CODE:URL GOTO=about:blank\nWAIT SECONDS=300');
}