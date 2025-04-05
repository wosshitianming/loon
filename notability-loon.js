let obj = JSON.parse($response.body);
obj = {
    "data": {
        "processAppleReceipt": {
            "__typename": "SubscriptionResult",
            "error": 0,
            "subscription": {
                "__typename": "AppStoreSubscription",
                "status": "active",
                "originalPurchaseDate": "2024-09-19T09:27:35.000Z",
                "originalTransactionId": "570001185968888",
                "expirationDate": "99999-12-31T23:59:59.000Z",
                "productId": "com.gingerlabs.Notability.premium_subscription",
                "tier": "premium",
                "refundedDate": null,
                "refundedReason": null,
                "isInBillingRetryPeriod": false,
                "gracePeriodExpiresAt": null,
                "expirationIntent": "CUSTOMER_RENEWAL",
                "overDeviceLimit": false,
                "user": {
                    "id": "0b9c2a38-9d7c-4659-9812-623af642d392",
                    "email": "",
                    "__typename": "User"
                },
            },
            "isClassic": false
        }
    }
};
$done({
    body: JSON.stringify(response)
});
