
H5PEditor.widgets.kekule_editor = H5PEditor.KekuleEditor = (function ($) {

  function C(parent, field, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
    this.kekule = undefined;
  }
   
  C.prototype.appendTo = function ($container) {
    
    var data = h5p_get_data_obj(this.params);

    var el = build("div", "kekule_wrapper");
    $container.append(el);
    var el_applet_container = build("div", undefined, el);
    el_applet_container.id = random_string();

    this.kekule = new kekule_wrapper(el_applet_container, "editor");
    try {
      this.kekule.data = data.data;
    } catch(ex) {}

  };

  C.prototype.save = function() {
    var data = {"data" : undefined};
    
    try { 
      data.data = this.kekule.data;
    } catch(ex) {}

    this.params = h5p_get_data_str(data);
    this.setValue(this.field, this.params);
  };


  C.prototype.validate = function () { this.save(); return true; };
  C.prototype.remove = function () {};
 
 
  return C;
})(H5P.jQuery); 



