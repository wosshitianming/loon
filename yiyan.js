/***********************************

> 應用名稱：一言
> 軟件版本：4.13
> 下載地址：https://apps.apple.com/us/app/id1010174792
> 腳本作者：Cuttlefish
> 微信賬號：墨魚手記
> 更新時間：2023-11-01
> 通知頻道：https://t.me/ddgksf2021
> 問題反饋：https://t.me/ddgksf2013_bot
> 特別說明：本腳本僅供學習交流使用，禁止轉載售賣
 
[rewrite_local]

# ～ 一言解锁会员权限（2023-11-01）@ddgksf2013
^https:\/\/app\.yiyan\.art\/yiyan\/ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yiyan.js

[mitm] 

hostname=app.yiyan.art

***********************************/

try {
    let body = JSON.parse($response.body);
    
    // 递归修改viptype
    const setVipType = (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            if ('viptype' in obj) {
                obj.viptype = "4";
            }
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    setVipType(obj[key]);
                }
            }
        }
    };
    
    setVipType(body);
    $done({ body: JSON.stringify(body) });
} catch (e) {
    console.log("一言VIP解锁错误: " + e.message);
    $done({});
}