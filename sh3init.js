var JS_ROOT_PATH = '/theme/smallstart/sh3/scripts/';
 
var IMPORT_JS_NAMES = ['shCore.js', 'shAutoloader.js', 'shBrushXml.js'];
for (var i in IMPORT_JS_NAMES){
 document.write('<script type="text/javascript" src="' + JS_ROOT_PATH + IMPORT_JS_NAMES[i] + '"></script>');
}
 
window.onload = function(){
 SyntaxHighlighter.autoloader.apply(null, path(
  'applescript            @shBrushAppleScript.js',
  'actionscript3 as3      @shBrushAS3.js',
  'bash shell             @shBrushBash.js',
  'coldfusiion cf         @shBrushColdFusion.js',
  'cpp c                  @shBrushCpp.js',
  'c# c-sharp csharp      @shBrushCSharp.js',
  'css                    @shBrushCss.js',
  'delphi pascal pas      @shBrushDelphi.js',
  'diff patch             @shBrushDiff.js',
  'erl erlang             @shBrushErlang.js',
  'groovy                 @shBrushGroovy.js',
  'java                   @shBrushJava.js',
  'jfx javafx             @shBrushJavaFX.js',
  'js jscript javascript  @shBrushJScript.js',
  'perl Perl pl           @shBrushPerl.js',
  'php                    @shBrushPhp.js',
  'text plain             @shBrushPlain.js',
  'powershell ps          @shBrushPowerShell.js',
  'py python              @shBrushPython.js',
  'ruby rails ror rb      @shBrushRuby.js',
  'sass scss              @shBrushSass.js',
  'scala                  @shBrushScala.js',
  'sql                    @shBrushSql.js',
  'vb vbnet               @shBrushVb.js',
  'xml xhtml xslt html    @shBrushXml.js'
 ));
 SyntaxHighlighter.all();
}
 
function path(){
 var args = arguments;
 var result = [];
 for(var i = 0; i < args.length; i++){
  result.push(args[i].replace('@', JS_ROOT_PATH));
 }
 return result;
}