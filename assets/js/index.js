console.log('Connection set')

$('#add_user').submit(function(event){
    alert("Data Inserted Successfully")
})

$('#update_user').submit(function(event){
    event.preventDefault()

    var unindexed_array=$(this).serializeArray();
    var data={}

    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data)
    var request={
        "url":`http://localhost:8080/api/users/${data.id}`,
        "method":'PUT',
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully")
    })
})
if(window.location.pathname=='/'){
    $ondelete=$(".table1 tr td a.all");  
    console.log("on click"+$ondelete)
    $ondelete.click(function(){
        var id =$(this).attr("data-id")
        console.log(id)
    

    var requests={
        "url":`http://localhost:8080/api/users/${id}`,
        "method":'DELETE'
    }

    console.log(requests)
    console.log("ksdbhdbchdb")

    if(confirm("Do you Want to Delete This Record")){
        $.ajax(requests).done(function(response){
            alert("Data Delete Successfully")
            location.reload()
        })  
    }
})
}