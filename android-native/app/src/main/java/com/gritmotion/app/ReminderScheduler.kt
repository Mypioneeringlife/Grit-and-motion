package com.gritmotion.app

import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.SystemClock

object ReminderScheduler {
    private const val REQUEST_TEST = 1501
    fun scheduleTest(context: Context, seconds: Int) {
        val alarm = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val intent = Intent(context, ReminderReceiver::class.java).apply {
            action = "com.gritmotion.app.GET_ACTIVE_TEST"
            putExtra("message", "Get active. Do one quick set, then log it.")
        }
        val pending = PendingIntent.getBroadcast(context, REQUEST_TEST, intent, PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)
        val triggerAt = SystemClock.elapsedRealtime() + seconds * 1000L
        alarm.setAndAllowWhileIdle(AlarmManager.ELAPSED_REALTIME_WAKEUP, triggerAt, pending)
    }
    fun cancelAll(context: Context) {
        val alarm = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val intent = Intent(context, ReminderReceiver::class.java)
        val pending = PendingIntent.getBroadcast(context, REQUEST_TEST, intent, PendingIntent.FLAG_NO_CREATE or PendingIntent.FLAG_IMMUTABLE)
        if (pending != null) alarm.cancel(pending)
    }
}
