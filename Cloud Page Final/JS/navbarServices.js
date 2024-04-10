const servicesNavOptions = {
    automation: {
        gif: './IMAGES/automationGif.gif',
        h1: 'Automation',
        p: 'Transform your buisness with automation. Boost efficiency, reduce errors, and stay ahead with our cutting-edge services.',
    },
    applicationServices: {
        gif: './IMAGES/applicationServicesGif.gif',
        h1: 'Application Services',
        p: 'Revolutionizing buisness through comprehensive application services that blend innovative development with seamless integration for unparalled digital solutions.',
    },
    cloud: {
        gif: './IMAGES/cloudGif.gif',
        h1: 'Cloud',
        p: 'Our Cloud services empower organizing with scalable and secure solutions, seamlessly integrating technology to drive efficiency and flexibility in the digital era.',
    },
    emergingTechnology: {
        gif: './IMAGES/emergingTechnologyGif.gif',
        h1: 'Emerging Technology',
        p: 'Revolutionizing wiht 5G speed and ensuring trust through Blockchain, our services drive business into a future of seamless connectivity.',
    },
    erpcrm: {
        gif: './IMAGES/ermcrmGif.gif',
        h1: 'ERP & CRM',
        p: 'Elevating efficiency with ERP and building lasting customer relationships with CRM, our solutions empower businesses to thrive through seamless integration.',
    },
    iot: {
        gif: './IMAGES/iotGif.gif',
        h1: 'Internet of Things',
        p: 'Our IoT services orchestrate a seamless integration of devices, data, and intelligence, ushering businesses into an era of smart, automated possibilites.',
    },
    dataAi: {
        gif: './IMAGES/dataAiGif.gif',
        h1: 'Data & AI',
        p: 'Transforming data into actionable insights and powering intelligent decisions, we propel businesses into a realm of innovation and strategic advantage.',
    },
    softwareEngineering: {
        gif: './IMAGES/softwareEngineeringGif.gif',
        h1: 'Software Engineering',
        p: 'We engineer solutions that seamlessly marry innovation with robust architecture for a transformative digital landscape.',
    },
}
var giff = document.getElementById('servicesGif');
var h1f = document.getElementById('servicesH1');
var pf = document.getElementById('servicesP');
function servicesLoad(option) {
    giff.src = servicesNavOptions[option]['gif'];
    h1f.innerHTML = servicesNavOptions[option]['h1'];
    pf.innerHTML = servicesNavOptions[option]['p'];
}
function servicesDefault() {
    giff.src = "";
    h1f.innerHTML = "";
    pf.innerHTML = "";
}