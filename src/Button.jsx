

function Button(){

//     const button_Handler = () => console.log("OUCH!");

//     let count = 0;

//     const click_handler = (name) => {

//     if(count < 3){
//         console.log(`${name} you have click ${count} times.`);
//         count++;
//     }else{
//         console.log('Don`t click me!😡');
//     }
// }

    const click_handler = (e) => e.target.textContent = 'OUCH! 🤕';

    return(
        <button onDoubleClick={(e) => click_handler(e)}>click me😀</button>
    );
}
export default Button