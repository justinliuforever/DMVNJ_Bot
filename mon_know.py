from time import gmtime, strftime

#########################################################################
import requests
import time
import requests




def run():


    cookies = {
        '_ga': 'GA1.2.950743523.1625451594',
        '__utmz': '170564479.1654483316.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)',
        '__utmz': '249468034.1654554230.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)',
        '__utma': '249468034.950743523.1625451594.1655082852.1655651674.12',
        '_gid': 'GA1.2.517472264.1661955063',
        '.AspNetCore.Antiforgery.w5W7x28NAIs': 'CfDJ8FL4PTyhMD1LugL8fNenWxwaMzNAg0IEdYkTLaa8vc-bWGWbXhHoD56kmvicnGI2x1BMwP6LxftVPWi_FuTaPEzkQs6BcW8ViZhEOz8qDsxIYDtNa8bWUdJI05brpgSpJR2n_d82m32DqanGw-y_3e4',
        'ARRAffinity': '42d2afc5949d89299c6735ed778af161517d407a0e9db6cfe7d7ff94cb017cfa',
        'ARRAffinitySameSite': '42d2afc5949d89299c6735ed778af161517d407a0e9db6cfe7d7ff94cb017cfa',
        'ASLBSA': '0003cbe228a0d024d1b8bbfeaf9e993dfeed6cba2519796b4dbea52d6c7d03f66f45',
        'ASLBSACORS': '0003cbe228a0d024d1b8bbfeaf9e993dfeed6cba2519796b4dbea52d6c7d03f66f45',
        '.AspNetCore.Session': 'CfDJ8FL4PTyhMD1LugL8fNenWxyeMbyeDIxMCuZrP8sq97B%2FzVYkh4Ypgkz7eIbeE144fboFC9H1SEb0PcGqa6M7VJaATbgs%2BCapk3jfwvBf1C2tT5YYUPOOrPHDYBfmjQOVdQnuKzUHKMruZMBLUNrmj0gKwNwWj1QbU%2FV3cwennR4M',
        '_gat': '1',
        '_gat_njmvcTracker': '1',
    }

    headers = {
        'authority': 'telegov.njportal.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'max-age=0',
        # Requests sorts cookies= alphabetically
        # 'cookie': '_ga=GA1.2.950743523.1625451594; __utmz=170564479.1654483316.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmz=249468034.1654554230.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=249468034.950743523.1625451594.1655082852.1655651674.12; _gid=GA1.2.517472264.1661955063; .AspNetCore.Antiforgery.w5W7x28NAIs=CfDJ8FL4PTyhMD1LugL8fNenWxwaMzNAg0IEdYkTLaa8vc-bWGWbXhHoD56kmvicnGI2x1BMwP6LxftVPWi_FuTaPEzkQs6BcW8ViZhEOz8qDsxIYDtNa8bWUdJI05brpgSpJR2n_d82m32DqanGw-y_3e4; ARRAffinity=42d2afc5949d89299c6735ed778af161517d407a0e9db6cfe7d7ff94cb017cfa; ARRAffinitySameSite=42d2afc5949d89299c6735ed778af161517d407a0e9db6cfe7d7ff94cb017cfa; ASLBSA=0003cbe228a0d024d1b8bbfeaf9e993dfeed6cba2519796b4dbea52d6c7d03f66f45; ASLBSACORS=0003cbe228a0d024d1b8bbfeaf9e993dfeed6cba2519796b4dbea52d6c7d03f66f45; .AspNetCore.Session=CfDJ8FL4PTyhMD1LugL8fNenWxyeMbyeDIxMCuZrP8sq97B%2FzVYkh4Ypgkz7eIbeE144fboFC9H1SEb0PcGqa6M7VJaATbgs%2BCapk3jfwvBf1C2tT5YYUPOOrPHDYBfmjQOVdQnuKzUHKMruZMBLUNrmj0gKwNwWj1QbU%2FV3cwennR4M; _gat=1; _gat_njmvcTracker=1',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
    }




    ##########################################################

    try:

        response = requests.get('https://telegov.njportal.com/njmvc/AppointmentWizard/19', cookies=cookies, headers=headers)


    except:
        print("croxy_proxy login faill... ")
        return

    #print(response.text)
    raw_data = response.text

    # only contain the time infoirmation
    try:
        index_f = raw_data.index('var timeData = ')
        index_e = raw_data.index('var locationModel = ')
        raw_data2 = raw_data[index_f + 15:index_e]
        #print(raw_data2)
    except:
        print("'time_data' find faill... ")
        return


    # refine Location id ...
    raw_data3 = []
    while (raw_data2.find("LocationId") != -1):
        index_begin = raw_data2.find("LocationId")
        # print(index_begin)
        index_end = raw_data2.find("LocationId", index_begin + 11)
        # print(index_begin)
        raw_data3.append(raw_data2[index_begin:index_end])
        # print(raw_data2[index_temp+16:index_temp+35])
        raw_data2 = raw_data2[index_end:]

    # refine {id:available time}
    time_list = {}
    for list in raw_data3:
        index_begin = list.find("LocationId")
        index_end = list.find('"FirstOpenSlot')
        id = list[index_begin + 12: index_end - 1]

        time_index = list.find("Next Available: ")
        time = list[time_index + 16:time_index + 35]
        time_list.update({id: time})
    #print(time_list.values())

    # re-range
    def changeind(time_list):
        # 0 -> 0, 1 -> 1, 2->17 3->2, 4->18, 5->4, 6->5. 7->19, 8->6 9->8, 10->20
        # 11->9, 12->10, 13->21, 14->11, 15->12, 16->22, 17->13, 18->14, 19->23,
        # 20->6, 21->16, 22->3, 23->7

        final_list = [0] * 24
        final_list[0] = time_list.get('267')
        final_list[1] = time_list.get('268')
        final_list[2] = time_list.get('270')
        final_list[3] = time_list.get('289')
        final_list[4] = time_list.get('272')
        final_list[5] = time_list.get('273')
        final_list[6] = time_list.get('275')
        final_list[7] = time_list.get('290')
        final_list[8] = time_list.get('276')
        final_list[9] = time_list.get('278')
        final_list[10] = time_list.get('279')
        final_list[11] = time_list.get('281')
        final_list[12] = time_list.get('282')
        final_list[13] = time_list.get('284')  # north
        final_list[14] = time_list.get('285')
        final_list[15] = time_list.get('287')
        final_list[16] = time_list.get('288')
        final_list[17] = time_list.get('269')
        final_list[18] = time_list.get('271')
        final_list[19] = time_list.get('274')
        final_list[20] = time_list.get('277')
        final_list[21] = time_list.get('280')
        final_list[22] = time_list.get('283')
        final_list[23] = time_list.get('286')  # toms

        return final_list

    newtime_list = changeind(time_list)



    #write date into file

    with open('know_availble.txt', 'w') as f:
        #f.write(f"{curr_time}\n")
        for line in newtime_list:
            #print(line)
            f.write(f"{line}\n")

    curr_time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
    print("run.." + curr_time)


#0 -> 0, 1 -> 1, 2->17 3->2, 4->18, 5->4, 6->5. 7->19, 8->6 9->8, 10->20
#11->9, 12->10, 13->21, 14->11, 15->12, 16->22, 17->13, 18->14, 19->23,
#20->6, 21->16, 22->3, 23->7

check = True
while(True):
    try:
        run()
        check = False




    except:
        print("error...")
    finally:
        time.sleep(0.75)






