/*
 *
 *
脚本功能：图图记账解锁永久高级版
软件版本：2.3.0
下载地址：
脚本作者：Hausd0rff
更新时间：2022-01-23
电报频道：
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

# > 图图记账解锁永久高级版
^https?:\/\/api\.rc-backup\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/ToToWalletFProCrack.js

[mitm] 

hostname = api.rc-backup.com
*
*
*/


var objc = JSON.parse($response.body);

    objc = 
{
  "request_date_ms" : 1753827477478,
  "request_date" : "2025-07-29T22:17:57Z",
  "subscriber" : {
    "non_subscriptions" : {

    },
    "first_seen" : "2023-09-21T11:20:58Z",
    "original_application_version" : "261",
    "other_purchases" : {

    },
    "management_url" : null,
    "subscriptions" : {
      "com.ziheng.totowallet.onetimepurchase" : {
        "store" : "app_store",
        "purchase_date" : "2024-09-09T09:09:09Z",
        "is_sandbox" : false,
        "original_purchase_date" : "2024-09-09T09:09:09Z",
        "store_transaction_id" : "490001314520000",
        "ownership_type" : "PURCHASED"
      },
      "com.ziheng.totowallet.yearly" : {
        "management_url" : "https://apps.apple.com/account/subscriptions",
        "expires_date" : "2025-01-14T19:40:11Z",
        "is_sandbox" : false,
        "original_purchase_date" : "2025-01-11T19:40:12Z",
        "refunded_at" : null,
        "store_transaction_id" : "350002320335501",
        "unsubscribe_detected_at" : "2025-01-14T19:58:30Z",
        "grace_period_expires_date" : null,
        "period_type" : "trial",
        "price" : {
          "amount" : 0,
          "currency" : "USD"
        },
        "purchase_date" : "2025-01-11T19:40:11Z",
        "display_name" : null,
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "entitlements" : {
      "all" : {
        "product_identifier" : "com.ziheng.totowallet.onetimepurchase",
        "purchase_date" : "2024-09-09T09:09:09Z"
      }
    },
    "original_purchase_date" : "2023-09-21T11:20:13Z",
    "original_app_user_id" : "$RCAnonymousID:3A4cbe36e7dbdf4bd38e206e71622164e1",
    "last_seen" : "2025-07-29T02:42:47Z"
  }
};

$done({body : JSON.stringify(objc)});
