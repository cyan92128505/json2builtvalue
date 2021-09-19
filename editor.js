var _option = {
  lineNumbers: true,
  mode: "application/dart",
  theme: "monokai",
};

var inputCodeMirror = CodeMirror(input_text, _option);
var outputCodeMirror = CodeMirror(output_text, _option);

inputCodeMirror.setSize("48%", "90vh");
outputCodeMirror.setSize("48%", "90vh");
