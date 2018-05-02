module.exports = {
    // API_CORE_URL: 'https://qa-503-core.callpotential.com',
    // API_LOC_URL: 'https://qa-503-loc.callpotential.com',
    // API_ACCT_URL: 'https://qa-503-acct.callpotential.com',
    API_INT_URL: 'https://qa-503-int.callpotential.com',
    // API_CALL_URL: 'https://qa-503-call.callpotential.com',
    // API_RPT_URL: 'https://qa-503-rpt.callpotential.com',
    // API_CHAT_URL: 'https://qa-503-chat.callpotential.com',
    // TWILIO_API_URL: 'https://api.twilio.com/2010-04-01/',
    ES_URL: 'https://e7cf70a9d4c5621274ba:2a8abacdc4@4f9d228b.qb0x.com:30780',
    homeUrl: 'https://qa-503.callpotential.com',
    APP_STACK: 'qa-503',
    TWILIO: {
        VOICE_URL: '/twilio/inbound.php',
        VOICE_FALLBACK_URL: 'http://twimlets.com/forward?PhoneNumber=%s',
        SMS_URL: '/twilio/sms-message-request',
        STATUS_URL: '/twilio/twilio_status_callback'
    },
    dateRanges: {
        CURRENT_MONTH: 'Current Month',
        CURRENT_QUARTER: 'Current Quarter',
        CURRENT_YEAR: 'Current Year',
        LAST_MONTH: 'Last Month',
        LAST_QUARTER: 'Last Quarter',
        LAST_YEAR: 'Last Year',
        CUSTOM_DATE: 'Custom Date'
    }
};