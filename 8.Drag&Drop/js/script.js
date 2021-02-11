let item=document.querySelector(".item");
let dropArea=document.querySelector(".drop-area");

// item.ondragend=(ev)=>{
//     console.log("drag END");
//     // ev.target.style.backgroundColor="teal"
// }

// item.ondrag=()=>console.log("ONDRAG");

// dropArea.ondragenter=()=>console.log("ENTER");

// dropArea.ondragleave=()=>console.log("LEAVE");
// let id;
// item.ondragstart=(ev)=>{
//     ev.dataTransfer.setData("id",ev.target.id)
//     // id=ev.target.id;
//     // console.log("drag START");
//     // ev.target.style.backgroundColor="red"
// }

// dropArea.ondragover=(ev)=>ev.preventDefault();

// dropArea.ondrop=(ev)=>{
//     let id=ev.dataTransfer.getData("id")
//     ev.target.append(document.getElementById(id))
// };

//TASK

// let items=document.querySelectorAll(".item")

// items.forEach(item=>{
//     item.ondragstart=(ev)=>{
//         console.log(ev)
//         ev.dataTransfer.setData("id",ev.target.id)
//     }
// })

// dropArea.ondragover=(ev)=>ev.preventDefault();

// dropArea.ondrop=(ev)=>{
//     let id=ev.dataTransfer.getData("id")
//     ev.target.append(document.getElementById(id))
// }

//TASK

let pic = document.getElementById('pic');
let items = document.querySelectorAll('.item');

pic.ondragstart=(ev)=>{
    ev.dataTransfer.setData('id', ev.target.id);
}

items.forEach(item=>{
    item.ondragover=(ev)=>ev.preventDefault();
    item.ondrop=(ev)=>{
        let id=ev.dataTransfer.getData('id');
        ev.target.append(document.getElementById(id));
    }

})