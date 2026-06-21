# Reminder Engine Design

The native reminder engine should own phone-level scheduling.

Bridge methods expected by the web app:
- GritMotionReminders.getReminderStatus()
- GritMotionReminders.scheduleTestReminder(seconds)
- GritMotionReminders.scheduleDailyReminders(jsonSettings)
- GritMotionReminders.cancelReminders()
