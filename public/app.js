
App();

function App() {
    console.log('starting app')
    const filters = [
        { vendorId: 0x0a43, productId: 0x0201 }
    ]

    navigator.usb.requestDevice({
        filters: filters,
    })
    .then((device) => {
        console.log(device)
    })
    .catch((err) => {
        console.log(err)
    })
}