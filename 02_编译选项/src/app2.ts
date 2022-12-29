console.log('hello')

// export let a = 20;

function add(this: Window, a: number, b: number,): number{
    console.log(this)
    return a+b
}

let box1 = document.getElementById('box1')

// box1是不是null，是null就不执行后面的代码了
box1?.addEventListener('click', function(){
    alert('hello')
})