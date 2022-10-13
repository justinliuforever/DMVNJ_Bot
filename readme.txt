第一部分:监控网站

mon_initi.py  监控initial permit网站
mon_know.py   监控knowledge test网站

目前这个程序是没有hide IP的.如果需要hide IP版本我可以再发一次. 程序目前间隔0.75秒对目标网站进行一次检测(可以直接修改间隔),并且将所有的available appointment信息从网站上爬下来后,并在重新排后将内容分别写到init_availble.txt和know_availble.txt中.




第二部分:提炼信息并推送链接

mon_refine_init.js  提炼initial的位置
mon_refine_know.js  提炼initial的位置

在程序一开头输入需要位置的时间,地点信息. 比如[0, "09/21/2022","makebtn18615"] 需要9月21号,BakersBasin的位置.
目前程序50毫秒分别对 init_availble.txt和know_availble.txt进行检测. 如果监测到有需要的位置,会将位置的url写进init_target.txt和know_target.txt文件中. 




第三部分:填表

mon_fillBot_init.js  填initial的表格
mon_fillBot_know.js  填knowledge的表格

程序用的是puppeteer. 运行前需要安装https://github.com/berstend/puppeteer-extra/tree/master/packages/puppeteer-extra-plugin-stealth 相关的文件
程序会每5毫秒对init_target.txt或者know_target.txt进行检测,如果有url直接进入链接开始填表并发送.