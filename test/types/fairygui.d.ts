declare namespace fairygui {
  interface Controller { }
  interface Transition { }
  interface GObject {
    getChild(name: string): GObject;
    getController(name: string): Controller;
    getTransition(transName: string): Transition;
  }
  interface GComponent extends GObject { }
  interface GTextField extends GObject { }
  interface GButton extends GComponent { }
  interface GComboBox extends GComponent { }
  interface GGraph extends GObject { }
  interface GGroup extends GObject { }
  interface GImage extends GObject { }
  interface GLabel extends GComponent { }
  interface GList extends GComponent { }
  interface GLoader extends GObject { }
  interface GMovieClip extends GObject { }
  interface GProgressBar extends GComponent { }
  interface GRichTextField extends GTextField { }
  interface GScrollBar extends GComponent { }
  interface GSlider extends GComponent { }
  interface GTextInput extends GTextField { }

}