$.ajax({
  url: 'https://data.cityofchicago.org/resource/ygr5-vcbg.json',
  type: 'get'
})
.done(function() {
  console.log("success");
  console.log(data)
})
.fail(function() {
  console.log("error");
})
.always(function() {
  console.log("complete");
});
