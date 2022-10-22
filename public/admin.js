
// Your Code Here

async function saveShinobi() {
    console.log('BUTTON');
    let inputValue = document.getElementById('shinobi-input').value
    let response = await fetch('http://localhost:9001/updateBook', {
        method: 'PATCH',
        headers: {
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify({
            'id': 1,
            'quantity': inputValue
        })
    }
    )
}

async function saveTess() {
    console.log('BUTTON');
    let inputValue = document.getElementById('tess-input').value
    let response = await fetch('http://localhost:9001/updateBook', {
        method: 'PATCH',
        headers: {
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify({
            'id': 2,
            'quantity': inputValue
        })
    }
    )
}

async function saveArathrae() {
    console.log('BUTTON');
    let inputValue = document.getElementById('arathrae-input').value
    let response = await fetch('http://localhost:9001/updateBook', {
        method: 'PATCH',
        headers: {
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify({
            'id': 3,
            'quantity': inputValue
        })
    }
    )
}

async function saveWarp() {
    console.log('BUTTON');
    let inputValue = document.getElementById('warp-input').value
    let response = await fetch('http://localhost:9001/updateBook', {
        method: 'PATCH',
        headers: {
            "Content-Type" : 'application/json'
        },
        body: JSON.stringify({
            'id': 4,
            'quantity': inputValue
        })
    }
    )
}

