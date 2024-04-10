const oasList = ["line1", "line2", "line3", "line4"];
const oasContent = [
    "Streamline your operations, enhance collaboration, and boost productivity with our advanced Workflow Automation solutions. We specialize in optimizing complex business processes, eliminating bottlenecks that hinder efficiency. By automating workflows, you empower your team to focus on strategic tasks, driving innovation and growth",
    "Elevate your business intelligence with our AI-Powered Solutions. Leverage artificial intelligence to make predictive analyses, automate decision-making processes, and gain unparalleled insights into your operations. Our AI solutions are designed to evolve with your business, continuously learning and adapting for optimal performance",
    "Empower your business with the efficiency of automation. Our Robotic Process Automation (RPA) solutions enable bots to handle repetitive, rule-based tasks, liberating your team from mundane activities. This not only improves operational speed but also allows your workforce to channel their energy into tasks that demand creativity and critical thinking",
    "Embark on a seamless journey to the cloud with our Cloud Automation services. Migrate effortlessly and automate your cloud-based processes for improved agility and accessibility. Whether you're transitioning to the cloud for the first time or optimizing your current cloud infrastructure, our solutions are designed to enhance efficiency and scalability"
]
function animgrow(element) {
    var index = 0;
    for (var i = 0; i < oasList.length; i++) {
        if (oasList[i] == element.id) {
            index = i;
            document.getElementById(oasList[i]).classList.add('growAnim');
        }
        else {
            document.getElementById(oasList[i]).classList.remove('growAnim');
        }
    }
    var oasp = document.getElementById('oasp');
    oasp.style.opacity = 0;
    setTimeout(function () {
        oasp.textContent = oasContent[index];
        oasp.style.opacity = 1;
    }, 500);
}