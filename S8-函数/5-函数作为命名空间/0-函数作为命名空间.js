function chunkNamespace() {
  console.log('A')
}
chunkNamespace(); // => A


(function(){
  console.log('x')
}()) // => x