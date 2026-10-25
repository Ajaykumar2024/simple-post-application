const ImageKit = require('@imagekit/nodejs')

const imageKit= new ImageKit({

    privateKey: "private_QM+lGN8lnSbsM5pq+m7Vi0S7eLo=",

})

async function uploadFile(buffer){
    // console.log(buffer)
    const result = await imageKit.files.upload({
        file:buffer.toString("base64"),
        fileName:"image.jpg"
    })

    return result;
}

module.exports=uploadFile


