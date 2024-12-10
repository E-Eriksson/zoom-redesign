import "./style.css";

const standardContentImg = "bg-[url('images/zoomWorkplace.png')]";
const standardContentText =
  "Zoom Workplace: Make teamwork more meaningful across hybrid teams with modern collaboration solutions.";
let lastImg = standardContentImg;

function changeContent(event) {
  document.getElementById("contentImg").classList.toggle(lastImg);

  console.log(this.id);
  if (this.id == "zoomWork") {
    document.getElementById("contentImg").classList.toggle(stdImgContWork);
    document.getElementById("contentText").innerHTML = stdContWork;
    lastImg = stdImgContWork;
  } else if (this.id == "aiCom") {
    document.getElementById("contentImg").classList.toggle(stdImgContAi);
    document.getElementById("contentText").innerHTML = stdContAi;
    lastImg = stdImgContAi;
  } else if (this.id == "business") {
    document.getElementById("contentImg").classList.toggle(stdImgContBusiness);
    document.getElementById("contentText").innerHTML = stdContBusiness;
    lastImg = stdImgContBusiness;
  } else if (this.id == "devEco") {
    document.getElementById("contentImg").classList.toggle(stdImgContDev);
    document.getElementById("contentText").innerHTML = stdContDev;
    lastImg = stdImgContDev;
  }
}

document.getElementById("contentImg").classList.toggle(standardContentImg);
document.getElementById("contentText").innerHTML = standardContentText;

const stdImgContWork = "bg-[url('images/zoomWorkplace.png')]";
const stdContWork =
  "Zoom Workplace: Make teamwork more meaningful across hybrid teams with modern collaboration solutions.";

const stdImgContAi = "bg-[url('images/zoomAi.png')]";
const stdContAi =
  "AI Companion: Drive impact with intelligence across the entire Zoom platform.";

const stdImgContBusiness = "bg-[url('images/business.png')]";
const stdContBusiness =
  "Business Services: Strengthen customer relationships across sales, marketing and contact center.";

const stdImgContDev = "bg-[url('images/developer_ecosystem.png')]";
const stdContDev =
  "Developer Ecosystem: Enable seamless workflows with Zoom's developer platform and tools.";

const element = document.getElementById("zoomWork");
element.addEventListener("click", changeContent);

const element1 = document.getElementById("aiCom");
element1.addEventListener("click", changeContent);

const element2 = document.getElementById("business");
element2.addEventListener("click", changeContent);

const element3 = document.getElementById("devEco");
element3.addEventListener("click", changeContent);
