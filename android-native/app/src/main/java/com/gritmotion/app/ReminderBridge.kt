package com.gritmotion.app

import android.content.Context
import android.webkit.JavascriptInterface
import org.json.JSONObject

class ReminderBridge(private val context: Context) {
    @JavascriptInterface
    fun getReminderStatus(): String {
        return JSONObject()
            .put("status", "native-ready")
            .put("message", "Native reminder bridge is available. Test a reminder from the app.")
            .toString()
    }
    @JavascriptInterface
    fun scheduleTestReminder(seconds: Int) { ReminderScheduler.scheduleTest(context, seconds.coerceAtLeast(5)) }
    @JavascriptInterface
    fun scheduleDailyReminders(jsonSettings: String) { /* Parse JSON and schedule random reminders here. */ }
    @JavascriptInterface
    fun cancelReminders() { ReminderScheduler.cancelAll(context) }
}
