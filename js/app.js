container = document.getElementById("main");
var text = new Blotter.Text("Hello,", {
    family : "'Playfair Display', serif",
    size: 120,
    fill: "#000",
    paddingLeft: 130,
    paddingTop: 150,
    needsUpdate: 1,
})
var material = new Blotter.ChannelSplitMaterial();
material.uniforms.uOffset.value = 0.02;
material.uniforms.uRotation.value = 64;
material.uniforms.uApplyBlur.value = 1;
material.uniforms.uAnimateNoise.value = 2;
var blotter = new Blotter(material, {
    texts: text
})
var scope = blotter.forText(text);
 scope.appendTo(container);










 
container = document.getElementById("main2");
var text = new Blotter.Text("Hello,", {
    family : "'Playfair Display', serif",
    size: 100,
    fill: "#000",
    paddingLeft: 50,
    paddingTop: 100,
    needsUpdate: 1,
})
var material = new Blotter.ChannelSplitMaterial();
material.uniforms.uOffset.value = 0.02;
material.uniforms.uRotation.value = 64;
material.uniforms.uApplyBlur.value = 1;
material.uniforms.uAnimateNoise.value = 2;
var blotter = new Blotter(material, {
    texts: text
})
var scope = blotter.forText(text);
 scope.appendTo(container);
