/*************************************
项目名称：Notability:笔记,PDF (自定义响应)
更新日期：2025-02-24
使用声明：仅供参考，请勿用于商业用途。
**************************************

[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body notability_classic.js

[mitm]
hostname = notability.com
*/

const newResponse = {
  "data": {
    "associateAppStoreTransactions": {
      "__typename": "SubscriptionOverview",
      "tier": "classic",                 // ✅ Classic 永久版
      "current": {
        "source": "AppStoreConsumer",
        "tier": "classic",
        "expirationDate": null,          // ✅ 永久买断，无过期时间
        "renewalDate": 1670006400000,    // ✅ 续费日期：2022-12-02 00:00:00
        "gracePeriodEndDate": null,
        "overDeviceLimit": false,
        "appStoreStatus": "lifetime",    // ✅ 关键字段：lifetime 买断
        "productId": "com.gingerlabs.Notability.classic.unlock",
        "originalTransactionId": "310001764266227",
        "__typename": "AppStoreSubscription"
      },
      "quotas": {
        "__typename": "SubscriptionFeatureQuotaView",
        "learnSummaries": {
          "quotaWindowType": "none",
          "usagePercentage": 0,
          "isUsageExceeded": false,      // ✅ 不超限
          "__typename": "SubscriptionFeatureQuota"
        },
        "learnQuestions": {
          "quotaWindowType": "none",
          "usagePercentage": 0,
          "isUsageExceeded": false,
          "__typename": "SubscriptionFeatureQuota"
        },
        "liveTranscription": {
          "quotaWindowType": "none",
          "usagePercentage": 0,
          "isUsageExceeded": false,
          "__typename": "SubscriptionFeatureQuota"
        }
      },
      "prior": null
    }
  }
};

$done({ body: JSON.stringify(newResponse) });