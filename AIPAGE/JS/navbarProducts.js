const productsNavOptions = {
    factoryInsights: {
        gif: './IMAGES/factoryInsightsGif.gif',
        h1: 'Factory Insights',
        p: 'Our Factory Monitoring System offers real-time oversight of industrial processes, enhancing efficiency through data-driven insights and automation',
    },
    attendanceTracker: {
        gif: './IMAGES/attendanceTrackerGif.gif',
        h1: 'Attendance Tracker',
        p: 'The Worker Attendance Application transforms time management with advanced features, revolutionizing workforce oversight for efficient attendance tracking.',
    },
    remoteHandling: {
        gif: './IMAGES/remoteHandlingGif.gif',
        h1: 'Remote Handling',
        p: 'Revolutinizing equipment operations, Remote Solutions use advanced tech for efficiency in unmanned tasks across various industries.',
    },
    equinox: {
        gif: './IMAGES/equinoxGif.gif',
        h1: 'Equinox - A Trading Bot',
        p: 'Elevating trading strategies, the Automated Trading Bot integrates advanced algorithms for efficient and strategic market execution.',
    },
    lightControlHub: {
        gif: './IMAGES/lightControlHubGif.gif',
        h1: 'Light Control Hub',
        p: 'Transforming illumination control, the Smart Bulb Management System integrates advanced technology for seamless and adaptive lighting in diverse applications.',
    },
    droneSolustions: {
        gif: './IMAGES/droneSolustionsGif.gif',
        h1: 'Drone Solutions',
        p: 'Transforming aerial operations, Drone Services utilize advanced tenchology as a pivotal solution for various industries, provinding efficiency and versatility in unmanned aerial tasks.',
    },
    smartVisionSystem: {
        gif: './IMAGES/smartVisionSystemGif.gif',
        h1: 'Smart Vision System',
        p: 'The AI Camera redefines monitoring, leveraging automated recognition and neural network capabilities for enhanced secuirty and analysis.',
    },
}
var gif = document.getElementById('productsGif');
var h1 = document.getElementById('productsH1');
var p = document.getElementById('productsP');
function productsLoad(option) {
    gif.src = productsNavOptions[option]['gif'];
    h1.innerHTML = productsNavOptions[option]['h1'];
    p.innerHTML = productsNavOptions[option]['p'];
}
function productsDefault() {
    gif.src = "";
    h1.innerHTML = "";
    p.innerHTML = "";
}