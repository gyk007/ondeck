/**
 * Class RootMenuUI
 */
export default class MenuUI {
  constructor() {
    this.id = 'Menu';
    return this.ui();
  }

  body() {
    return {
      view: 'list',
      css: 'onedeck_root_menu',
      id: `${this.id}List`,
      borderless: true,
      scroll: false,
      template: "<span class='webix_icon mdi #icon#'></span> #value#",
      select: true,
      type: {
        height: 40,
      },
    };
  }

  ui() {
    return {
      id: this.id,
      view: 'sidemenu',
      width: 200,
      position: 'left',
      state: (state) => {
        const toolbarHeight = $$('ContentToolbar').$height;
        state.top = toolbarHeight;
        state.height -= toolbarHeight;
      },
      body: this.body(),
    };
  }
}
