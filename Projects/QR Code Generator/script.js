// getting the elements
const qrForm=document.getElementById("qrForm");
const qrImage=document.getElementById("qrImg");
const qrContainer=document.getElementById("qrContainer");
const qrInputText=document.getElementById("qrInput");
const qrButton=document.getElementById("qrButton");

// for rendering the QR Code image
const renderQR=(url)=>{
    if(!url) return;
    qrButton.innerText="Generating...";
    qrImage.src=url;
    // loading purpose
    const onLoading=()=>{
        const interval=setInterval(()=>{
            qrContainer.classList.add("show");
            clearInterval(interval);
            qrButton.innerText="Generate QR Code";
        },500);
    };
    qrImage.addEventListener("load",onLoading);

}
// on clicking generate button
qrForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data=new FormData(qrForm);
    const text=data.get("qrtext");
    const qrurl=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

    renderQR(qrurl);
});
// after clearing the text
qrInputText.addEventListener("keyup",()=>{
    if(!qrInputText.value.trim()){
        qrContainer.classList.remove("show"); 
    }
});