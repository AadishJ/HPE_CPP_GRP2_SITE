module.exports = {
    get_host: '127.0.0.1',
    get_port: 15001, // Matches the port for /event/ in nginx.conf
    post_host: '127.0.0.1',
    post_port: 15101, // Matches EVENT_DAEMON_POST in local_settings.py
    http_host: '127.0.0.1',
    http_port: 15102, // Matches the port for /channels/ in nginx.conf
    long_poll_timeout: 29000,
};