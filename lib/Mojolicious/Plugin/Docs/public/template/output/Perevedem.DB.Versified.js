Ext.data.JsonP.Perevedem_DB_Versified({
	"tagname": "class",
	"name": "Perevedem::DB::Versified",
	"extends": "Perevedem::DB",
	"mixins": ["Ext.util.Floating", "Ext.util.Observable"],
	"alternateClassNames": ["Perevedem::DB::Versified"],
	"singleton": false,
	"requires": [],
	"uses": [],
	"enum": null,
	"override": null,
	"inheritable": null,
	"inheritdoc": null,
	"meta": {},
	"private": null,
	"id": "class-Perevedem::DB::Versified",
	"code_type": "ext_define",
	"members": {
		"cfg": [{
				"name": "icon",
				"tagname": "cfg",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "cfg-icon"
			}, {
				"name": "name",
				"tagname": "cfg",
				"owner": "Perevedem::DB::Versified",
				"meta": {
					"required": true
				},
				"id": "cfg-name"
			}, {
				"name": "open",
				"tagname": "cfg",
				"owner": "Perevedem::DB::Versified",
				"meta": {
					"private": true
				},
				"id": "cfg-open"
			}, {
				"name": "text",
				"tagname": "cfg",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "cfg-text"
			}
		],
		"property": [{
				"name": "cache",
				"tagname": "property",
				"owner": "Perevedem::DB::Versified",
				"meta": {
					"private": true
				},
				"id": "property-cache"
			}, {
				"name": "disabled",
				"tagname": "property",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "property-disabled"
			}, {
				"name": "size",
				"tagname": "property",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "property-size"
			}
		],
		"method": [{
				"name": "constructor",
				"tagname": "method",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "method-constructor"
			}, {
				"name": "getIcon",
				"tagname": "method",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "method-getIcon"
			}, {
				"name": "getOpen",
				"tagname": "method",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "method-getOpen"
			}, {
				"name": "getSize",
				"tagname": "method",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "method-getSize"
			}, {
				"name": "highlight",
				"tagname": "method",
				"owner": "Perevedem::DB::Versified",
				"meta": {
					"chainable": true,
					"private": true
				},
				"id": "method-highlight"
			}, {
				"name": "setIcon",
				"tagname": "method",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "method-setIcon"
			}, {
				"name": "setOpen",
				"tagname": "method",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "method-setOpen"
			}, {
				"name": "setSize",
				"tagname": "method",
				"owner": "Perevedem::DB::Versified",
				"meta": {},
				"id": "method-setSize"
			}
		],
		"event": [{
				"name": "load",
				"tagname": "event",
				"owner": "Perevedem::DB",
				"meta": {},
				"id": "event-load"
			}
		],
		"css_var": [],
		"css_mixin": []
	},
	"linenr": 1,
	"files": [{
			"filename": "Versified.pm",
			"href": "http://svn/perevedem/plain/Perevedem/DB/ResultSetVersified.pm"
		}
	],
	"html_meta": {},
	"statics": {
		"cfg": [],
		"property": [],
		"method": [{
				"name": "doSomething",
				"tagname": "method",
				"owner": "Perevedem::DB::Versified",
				"meta": {
					"static": true
				},
				"id": "method-doSomething"
			}, {
				"name": "filter",
				"tagname": "method",
				"owner": "Perevedem::DB::Versified",
				"meta": {
					"static": true
				},
				"id": "method-filter"
			}
		],
		"event": [],
		"css_var": [],
		"css_mixin": []
	},
	"component": false,
	"superclasses": ["Perevedem::DB"],
	"subclasses": [],
	"mixedInto": [],
	"parentMixins": [],
	"html": "<div> <pre class=\"hierarchy\"> <h4>Alternate names</h4> <div class='alternate-class-name'>Perevedem::Db::Versified</div> <h4>Hierarchy</h4> <div class='subclass first-child'> Perevedem::DB <div class='subclass '><strong>Perevedem::DB::Versified</strong></div> </div> <h4>Mixins</h4> <div class='dependency'>DBIx::Class::ResultSet</div> <div class='dependency'>DBIx::Class::Relationships</div> <h4>Files</h4> <div class='dependency'> <a href='http://svn/perevedem/plain/Perevedem/DB/ResultSetVersified.pm' target='_blank'>Versified.pm</a> </div> </pre> <div class='doc-contents'><p>An example class showcasing the features of JSDuck.</p>\n\n<p><strong>Markdown</strong> is supported thoughout the <a href=\"http://docs.sencha.com/ext-js/4.0/\">docs</a>.</p>\n\n<p>Link to external class and\nits method.\nLink to <a href=\"#!/api/Perevedem::DB::Versified-method-setSize\" rel=\"Perevedem::DB::Versified-method-setSize\" class=\"docClass\">method of this class</a>.</p>\n\n<p><p><img src=\"\" alt=\"Alt text\" width=\"\" height=\"\"></p></p>\n\n<p>An embedded live example:</p>\n\n<pre class='inline-example '><code>Ext.create('<a href=\"#!/api/Perevedem::DB::Versified\" rel=\"Perevedem::DB::Versified\" class=\"docClass\">Perevedem::DB::Versified</a>', {\n    text: 'Click me, please!',\n    handler: function() {\n        alert('You clicked me!')\n    }\n});\n</code></pre>\n\n<p><strong>Note:</strong> this is not a fully working example. When you run it\nthrough JSDuck you will get warnings about a lot of missing classes\nthat this example class references, additionally it doesn't make\nsense for singleton class to have static methods.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required Config options</h3><div id='cfg-name' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-cfg-name' class='name not-expandable'>name</a><span> : String</span><strong class='required signature' >required</strong></div><div class='description'><div class='short'><p>A very importand config option that must be specified.</p>\n</div><div class='long'><p>A very importand config option that must be specified.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional Config options</h3><div id='cfg-icon' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-cfg-icon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-cfg-icon' class='name expandable'>icon</a><span> : String</span></div><div class='description'><div class='short'>A config option with type, name, and default value\nauto-detected. ...</div><div class='long'><p>A config option with type, name, and default value\nauto-detected.  Additionally docs for getIcon and setIcon\naccessor methods are generated.</p>\n<p>Defaults to: <code>&quot;some/file.png&quot;</code></p></div></div></div><div id='cfg-open' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-cfg-open' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-cfg-open' class='name expandable'>open</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>A private config option of boolean type. ...</div><div class='long'><p>A private config option of boolean type.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-text' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-cfg-text' class='name expandable'>text</a><span> : String</span></div><div class='description'><div class='short'>A config option with explicit type, name, and default value. ...</div><div class='long'><p>A config option with explicit type, name, and default value.</p>\n<p>Defaults to: <code>&quot;Click Me!&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cache' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-property-cache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-property-cache' class='name expandable'>cache</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>A private property ...</div><div class='long'><p>A private property</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-disabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-property-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-property-disabled' class='name expandable'>disabled</a><span> : Boolean</span></div><div class='description'><div class='short'>A property with auto-detected type and name. ...</div><div class='long'><p>A property with auto-detected type and name.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-size' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-property-size' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-property-size' class='name expandable'>size</a><span> : Object</span></div><div class='description'><div class='short'>A property with explicit type name and name. ...</div><div class='long'><p>A property with explicit type name and name.\nIt's an object containing the following fields:</p>\n<ul><li><span class='pre'>width</span> : Number<div class='sub-desc'><p>The width.</p>\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'><p>The height.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Perevedem::DB::Versified-method-constructor' class='name expandable'>Perevedem::DB::Versified</a>( <span class='pre'>[cfg]</span> ) : <a href=\"#!/api/Perevedem::DB::Versified\" rel=\"Perevedem::DB::Versified\" class=\"docClass\">Perevedem::DB::Versified</a></div><div class='description'><div class='short'>Constructor documentation. ...</div><div class='long'><p>Constructor documentation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object (optional)<div class='sub-desc'><p>An optional config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Perevedem::DB::Versified\" rel=\"Perevedem::DB::Versified\" class=\"docClass\">Perevedem::DB::Versified</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getIcon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-cfg-icon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-method-getIcon' class='name expandable'>getIcon</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of icon. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Perevedem::DB::Versified-cfg-icon\" rel=\"Perevedem::DB::Versified-cfg-icon\" class=\"docClass\">icon</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOpen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-cfg-open' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-method-getOpen' class='name expandable'>getOpen</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of open. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Perevedem::DB::Versified-cfg-open\" rel=\"Perevedem::DB::Versified-cfg-open\" class=\"docClass\">open</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-method-getSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-method-getSize' class='name expandable'>getSize</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the size of component. ...</div><div class='long'><p>Returns the size of component.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Object with properties:</p>\n<ul><li><span class='pre'>width</span> : Number<div class='sub-desc'><p>The width.</p>\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'><p>The height.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-highlight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-method-highlight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-method-highlight' class='name expandable'>highlight</a>( <span class='pre'></span> ) : <a href=\"#!/api/Perevedem::DB::Versified\" rel=\"Perevedem::DB::Versified\" class=\"docClass\">Perevedem::DB::Versified</a><strong class='chainable signature' >chainable</strong><strong class='private signature' >private</strong></div><div class='description'><div class='short'>A private method\nOne can also use tags inside here. ...</div><div class='long'><p>A private method\nOne can also use tags inside here.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Perevedem::DB::Versified\" rel=\"Perevedem::DB::Versified\" class=\"docClass\">Perevedem::DB::Versified</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setIcon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-cfg-icon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-method-setIcon' class='name expandable'>setIcon</a>( <span class='pre'>icon</span> )</div><div class='description'><div class='short'>Sets the value of icon. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Perevedem::DB::Versified-cfg-icon\" rel=\"Perevedem::DB::Versified-cfg-icon\" class=\"docClass\">icon</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>icon</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOpen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-cfg-open' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-method-setOpen' class='name expandable'>setOpen</a>( <span class='pre'>open</span> )</div><div class='description'><div class='short'>Sets the value of open. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Perevedem::DB::Versified-cfg-open\" rel=\"Perevedem::DB::Versified-cfg-open\" class=\"docClass\">open</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>open</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-method-setSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-method-setSize' class='name expandable'>setSize</a>( <span class='pre'>size</span> )</div><div class='description'><div class='short'>Sets the size. ...</div><div class='long'><p>Sets the size.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>size</span> : Object<div class='sub-desc'><p>An object describing width and height:</p>\n<ul><li><span class='pre'>width</span> : Number (optional)<div class='sub-desc'><p>The width.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>height</span> : Number (optional)<div class='sub-desc'><p>The height.</p>\n<p>Defaults to: <code>0</code></p></div></li></ul></div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='method-doSomething' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-method-doSomething' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-method-doSomething' class='name expandable'>doSomething</a>( <span class='pre'></span> )<strong class='static signature' >static</strong></div><div class='description'><div class='short'>A static method that gets inherited by subclasses. ...</div><div class='long'><p>A static method that gets inherited by subclasses.</p>\n</div></div></div><div id='method-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-method-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-method-filter' class='name expandable'>filter</a>( <span class='pre'>fn, scope</span> ) : Ext.Component[]<strong class='static signature' >static</strong></div><div class='description'><div class='short'>A method documented as static. ...</div><div class='long'><p>A method documented as static.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>Callback function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cmp</span> : Ext.Component<div class='sub-desc'><p>The component parameter.</p>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>Component index parameter.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>The return value of callback\nmust be true to include the component, false to exclude.</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>Scope for the callback.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Component[]</span><div class='sub-desc'><p>Array of components.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-click' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Perevedem::DB::Versified'>Perevedem::DB::Versified</span><br/><a href='source/example.html#Ext-master-Switch-event-click' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Perevedem::DB::Versified-event-click' class='name expandable'>click</a>( <span class='pre'>this, times, eOpts</span> )</div><div class='description'><div class='short'>Fired when button clicked. ...</div><div class='long'><p>Fired when button clicked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Perevedem::DB::Versified\" rel=\"Perevedem::DB::Versified\" class=\"docClass\">Perevedem::DB::Versified</a><div class='sub-desc'>\n</div></li><li><span class='pre'>times</span> : Number<div class='sub-desc'><p>The number of times clicked.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n</div></li></ul></div></div></div></div></div></div></div>"
});
