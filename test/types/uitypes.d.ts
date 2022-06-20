declare namespace uit {
  type __UIComponent<
    Base,
    Children,
    Controllers extends string = string,
    Transitions extends string = string
  > = Base & {
    getChild<Key extends keyof Children>(name: Key, explicitType: true): Children[Key];
    getController(name: Controllers): fairygui.Controller;
    getTransition(transName: Transitions): fairygui.Transition;
  };
  namespace ActivationCode {
    type ActivationCodeWindow = __UIComponent<
      fairygui.GComponent,
      { bg: fairygui.GLoader; btnGet: UILib.Components.button.Button2_Orange; txtName: fairygui.GTextField },
      string,
      string
    >;
  }
  namespace Active {
    type ActiveWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        relation: UILibFrame.Components.WindowRelationList;
      },
      string,
      string
    >;
    type ActiveDailyWindow = __UIComponent<
      fairygui.GComponent,
      {
        topBg: fairygui.GImage;
        flag: fairygui.GImage;
        txtActive: fairygui.GTextField;
        bar: Active.Component.ActiveBar;
        listActive: fairygui.GList;
        txtMyScore: fairygui.GTextField;
        listTask: fairygui.GList;
      },
      string,
      string
    >;
    type ActiveActHallWindow = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        awardList: fairygui.GList;
        txtCurTime: fairygui.GTextField;
        txtCurNeedLv: fairygui.GTextField;
        txtDes: fairygui.GTextField;
        btnJoin: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
    type ActiveAlertWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        ok: UILib.Components.button.Button2_Orange;
        cancel: UILib.Components.button.Button2_Red;
        txtContent: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Component {
      type ActiveBar = __UIComponent<fairygui.GProgressBar, { bar: fairygui.GImage }, string, string>;
      type ActiveTaskRender = __UIComponent<
        fairygui.GComponent,
        {
          bg: fairygui.GLoader;
          btnGo: UILib.Components.button.Button2_Orange;
          txtTask: fairygui.GTextField;
          txtCon: fairygui.GTextField;
          txtActive: fairygui.GTextField;
          txtDone: fairygui.GTextField;
        },
        string,
        string
      >;
      type ActiveAwardRender = __UIComponent<
        fairygui.GComponent,
        {
          btnGet: UILib.Components.button.Button2_Orange;
          isGet: fairygui.GImage;
          list: fairygui.GList;
          txtActive: fairygui.GTextField;
        },
        string,
        string
      >;
      type ActiveHallRender = __UIComponent<
        fairygui.GButton,
        {
          bg: fairygui.GLoader;
          txtTime: fairygui.GTextField;
          txtName: fairygui.GTextField;
          txtLv: fairygui.GTextField;
          txtState: fairygui.GTextField;
          word: fairygui.GGroup;
        },
        "button",
        string
      >;
    }
  }
  namespace Alert {
    type AlertWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        alertOnceCheck: UILib.Components.button.CheckBox2;
        txtInfo: fairygui.GTextField;
        cancel: UILib.Components.button.Button3_green;
        ok: UILib.Components.button.Button3_yellow;
      },
      "alertOnceCtrl" | "typeCtrl",
      string
    >;
  }
  namespace AnFengQQ {
    type AnFengQQWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrameTwo; btnCopy: UILib.Components.button.Button11 },
      string,
      string
    >;
  }
  namespace ArtifactSale {}
  namespace AwardShow {
    type AwardShowWindow = __UIComponent<fairygui.GComponent, { comView: AwardShow.comWindow }, string, string>;
    type comWindow = __UIComponent<
      fairygui.GComponent,
      { iconFrame: fairygui.GImage; listItemU: fairygui.GList; listItemD: fairygui.GList },
      "conType",
      string
    >;
  }
  namespace Bag {
    type BagRoleWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnNormal: UILib.Components.tab.tab_1;
        iconFullBag: fairygui.GImage;
        txtCount: fairygui.GTextField;
        btnMaterial: UILib.Components.tab.tab_1;
        btnEquip: UILib.Components.tab.tab_1;
        listBag: fairygui.GList;
        com101: UILib.Components.money.MoneyItem;
        btnRecharge: UILib.Components.button.ButtonAdd5;
        btnMall: UILib.Components.button.Button3_yellow;
        btnTidy: UILib.Components.button.Button3_green;
        btnAllUse: UILib.Components.button.Button3_blue;
      },
      "conType",
      string
    >;
    type BagWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        relation: UILibFrame.Components.WindowRelationList;
      },
      string,
      string
    >;
    type BagStorageWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnOepn: UILib.Components.button.CheckBox1;
        listStorage: fairygui.GList;
        listPageStorage: fairygui.GList;
        txtNumStorage: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        comList: Bag.Component.ListView;
        txtCount: fairygui.GTextField;
        btnTidyStorage: UILib.Components.button.Button3_blue;
        btnTidyBag: UILib.Components.button.Button3_blue;
      },
      "conSel",
      string
    >;
    type BagMallWindow = __UIComponent<
      fairygui.GComponent,
      {
        loaderM: fairygui.GLoader;
        loaderL: fairygui.GLoader;
        loaderR: fairygui.GLoader;
        loaderArrow: fairygui.GLoader;
        iconFlowerL1: fairygui.GImage;
        iconFlowerL2: fairygui.GImage;
        iconFlowerR1: fairygui.GImage;
        iconFlowerR2: fairygui.GImage;
        iconBackListL: fairygui.GImage;
        iconBackListR: fairygui.GImage;
        btnBuy: UILib.Components.button.Button2_Orange;
        listMall: fairygui.GList;
        comList: Bag.Component.ListView;
        comMoney: UILib.Components.money.MoneyView;
        txtNameMall: fairygui.GTextField;
        txtNameBag: fairygui.GTextField;
        txtCount: fairygui.GTextField;
      },
      string,
      string
    >;
    type BagView = __UIComponent<
      fairygui.GComponent,
      {
        loaderR: fairygui.GLoader;
        iconTabBg: fairygui.GImage;
        iconFrameBag: fairygui.GImage;
        btnNormal: UILib.Components.tab.tab_1;
        iconFullBag: fairygui.GImage;
        txtCount: fairygui.GTextField;
        btnMaterial: UILib.Components.tab.tab_1;
        btnEquip: UILib.Components.tab.tab_1;
        comList: fairygui.GList;
      },
      "conType",
      string
    >;
    type ItemRecycleWindow = __UIComponent<
      fairygui.GComponent,
      {
        listView: Bag.Component.RecycleListView;
        recycleList: fairygui.GList;
        listReward: fairygui.GList;
        btnNormal: UILib.Components.tab.tab_1;
        btnSpecial: UILib.Components.tab.tab_1;
        txtTimeDesc: fairygui.GTextField;
        txtTime: fairygui.GTextField;
        txtAuto: fairygui.GTextField;
        btnAuto: fairygui.GLoader;
        btnUnAuto: fairygui.GLoader;
        bubble: fairygui.GLoader;
        txtRate: fairygui.GTextField;
        btnOk: UILib.Components.button.Button3_yellow;
      },
      "conType" | "conRecycle",
      string
    >;
    namespace Component {
      type ListView = __UIComponent<
        fairygui.GComponent,
        { mask: fairygui.GGraph; listBag: fairygui.GList },
        string,
        string
      >;
      type StoragePageRender = __UIComponent<
        fairygui.GComponent,
        { mask: fairygui.GGraph; listStorage: fairygui.GList },
        string,
        string
      >;
      type BagMallRender = __UIComponent<
        fairygui.GButton,
        {
          iconFrame0: fairygui.GImage;
          iconFrame1: fairygui.GImage;
          iconValBg: fairygui.GImage;
          loaderCost: fairygui.GLoader;
          item: UILib.Components.render.RewardRender;
          txtName: fairygui.GTextField;
          txtPrice: fairygui.GTextField;
        },
        "button",
        string
      >;
      type StorageRender = __UIComponent<
        fairygui.GComponent,
        { bagRender: UILib.Components.render.BagRender; loaderCon: fairygui.GLoader },
        string,
        string
      >;
      type ItemRecycleRender = __UIComponent<
        fairygui.GComponent,
        { btnOepn: UILib.Components.button.CheckBox1; imgType: fairygui.GLoader },
        string,
        string
      >;
      type ItemRecycleItemRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.BagRender; imgCheck: fairygui.GImage },
        string,
        string
      >;
      type RecycleListView = __UIComponent<
        fairygui.GComponent,
        { mask: fairygui.GGraph; listBag: fairygui.GList },
        string,
        string
      >;
    }
  }
  namespace BatchUse {
    type BatchUseWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        item: UILib.Components.render.BagRender;
        count: fairygui.GTextField;
        itemName: fairygui.GTextField;
        reduceBtn: UILib.Components.button.ButtonMinus;
        minBtn: UILib.Components.button.ButtonMin2;
        addBtn: UILib.Components.button.ButtonAdd;
        maxBtn: UILib.Components.button.ButtonMax2;
        slider: UILib.Components.slider.Slider2;
        useBtn: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
  }
  namespace BizAct {
    type BizActWindow = __UIComponent<
      fairygui.GComponent,
      {
        bgActivity: fairygui.GLoader;
        titleActivity: fairygui.GLoader;
        listActivity: fairygui.GList;
        close: UILib.Components.button.ButtonClose1;
      },
      "conState",
      string
    >;
    type PlayIntroButton = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    type BizActDescWindow = __UIComponent<fairygui.GComponent, { txtDesc: fairygui.GTextField }, string, string>;
    namespace Components {
      type BizActRender = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
      type BizActTabRender = __UIComponent<
        fairygui.GButton,
        { redPoint: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type PlayHelpButton = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
    namespace Components.SubViewComponents {
      type BizActBtnRender = __UIComponent<
        fairygui.GComponent,
        { btnTo: UILib.Components.button.Button2_Red },
        string,
        string
      >;
      type BizActModeRender = __UIComponent<fairygui.GComponent, { animHolder: fairygui.GGraph }, string, string>;
      type BizActDescRender = __UIComponent<fairygui.GComponent, { actDesc: fairygui.GTextField }, string, string>;
      type BizActTimeRender = __UIComponent<fairygui.GComponent, { actTime: fairygui.GTextField }, string, string>;
      type BizActBgRender = __UIComponent<fairygui.GComponent, { imageBg: fairygui.GLoader }, string, string>;
    }
  }
  namespace BizActAthletics {
    type BizActAthleticsWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnList: fairygui.GList;
        condtionList: fairygui.GList;
        bestItem0: UILib.Components.render.RewardRender;
        bestItem1: UILib.Components.render.RewardRender;
        bestName0: fairygui.GTextField;
        mod: fairygui.GGraph;
        bestName1: fairygui.GTextField;
        txtBestDesc: fairygui.GTextField;
        txtLast: fairygui.GTextField;
        btnUpgrade: BizActAthletics.Components.ButtonQwts;
        btnGet: BizActAthletics.Components.ButtonMflq;
        imgYwc: fairygui.GLoader;
        helpBtn: BizAct.Components.PlayHelpButton;
        actTime: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type BizActAthleticsBtn = __UIComponent<
        fairygui.GButton,
        { txtName: fairygui.GTextField; txtDownName: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
      type BizActAthleticsRender = __UIComponent<
        fairygui.GComponent,
        {
          txtDesc: fairygui.GTextField;
          awardList: fairygui.GList;
          imgYwc: fairygui.GLoader;
          txtLast: fairygui.GTextField;
          btnUpgrade: UILib.Components.button.Button15;
          btnGet: UILib.Components.button.Button15;
        },
        string,
        string
      >;
      type ButtonMflq = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonQwts = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace BizActOddsPackage {
    type BizActOddsPackageWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnget: BizActOddsPackage.Component.ButtonGet;
        listAward: fairygui.GList;
        roleInView: UILib.Components.roleInView.RoleInView;
        txtTime: fairygui.GTextField;
        list: fairygui.GList;
        txtMoney: fairygui.GTextField;
        imgZhong2: fairygui.GLoader;
      },
      string,
      string
    >;
    namespace Component {
      type BizActOddsPackageRender = __UIComponent<
        fairygui.GButton,
        { imgEq: fairygui.GLoader; imgWord: fairygui.GLoader },
        "button",
        string
      >;
      type ButtonGet = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace BizActWelfareSale {
    type BizActWelfareSaleWindow = __UIComponent<
      fairygui.GComponent,
      {
        listTab: fairygui.GList;
        list: fairygui.GList;
        helpBtn: BizAct.PlayIntroButton;
        txtTimes: fairygui.GTextField;
        btnL: UILib.Components.button.ButtonArrow2;
        btnR: UILib.Components.button.ButtonArrow2;
      },
      string,
      string
    >;
    namespace Component {
      type BizActWelfareSaleTabRender = __UIComponent<
        fairygui.GButton,
        { txtName: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
      type BizActWelfareSaleRender = __UIComponent<
        fairygui.GComponent,
        {
          btnBuy: UILib.Components.button.Button11;
          imgGet: fairygui.GImage;
          txtCount: fairygui.GTextField;
          txtName: fairygui.GTextField;
          item: UILib.Components.render.RewardRender2;
          diamondGroup: fairygui.GGroup;
          loongCoinGroup: fairygui.GGroup;
          txtOldPrice: fairygui.GTextField;
          txtNowPrice: fairygui.GTextField;
        },
        string,
        string
      >;
    }
  }
  namespace BizBank {
    type BizBankWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtCost: fairygui.GTextField;
        txtStore: fairygui.GTextField;
        txtStoreMax: fairygui.GTextField;
        txtTotalStore: fairygui.GTextField;
        actTime: fairygui.GTextField;
        actDesc: fairygui.GTextField;
        btnReceived: BizBank.Components.Button1;
      },
      string,
      string
    >;
    namespace Components {
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace BizCapitalWar {
    type BizCapitalWarWindow = __UIComponent<
      fairygui.GComponent,
      {
        rewardList: fairygui.GList;
        btnGo: BizCapitalWar.btnOpen;
        txtTimeDay: fairygui.GTextField;
        txtTime: fairygui.GTextField;
        roleInView: UILib.Components.roleInView.RoleInView;
      },
      string,
      string
    >;
    type btnOpen = __UIComponent<fairygui.GButton, {}, "button", string>;
  }
  namespace BizCrossServerTeam {
    type BizCrossServerTeamWindow = __UIComponent<
      fairygui.GComponent,
      {
        rewardList: fairygui.GList;
        txtTimeDay: fairygui.GTextField;
        roleInView: UILib.Components.roleInView.RoleInView;
        txtTime: fairygui.GTextField;
      },
      string,
      string
    >;
  }
  namespace BizDragonSon {
    type BizDragonSonWindow = __UIComponent<
      fairygui.GComponent,
      {
        loaderDesc: fairygui.GLoader;
        roleGraph: fairygui.GGraph;
        txtAttrsDesc: fairygui.GTextField;
        btnReceived: BizDragonSon.Components.Button1;
        txtRecharged: fairygui.GTextField;
        txtSkillName: fairygui.GTextField;
        txtSkillEffect: fairygui.GTextField;
        item: UILib.Components.render.RewardRender2;
        actTime: fairygui.GTextField;
        actDesc: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace BizFreeTreasure {
    type BizFreeTreasureWindow = __UIComponent<
      fairygui.GComponent,
      { list: fairygui.GList; actDesc: fairygui.GTextField; actTime: fairygui.GTextField },
      string,
      string
    >;
    type BizFreeTreasureRender = __UIComponent<
      fairygui.GComponent,
      {
        txtContent: fairygui.GTextField;
        list: fairygui.GList;
        btnGet: UILib.Components.button.Button11;
        btnGo: UILib.Components.button.Button11;
        red: fairygui.GImage;
      },
      "getState",
      string
    >;
  }
  namespace BizLottery_AF {
    type BizLotteryWindow_AF = __UIComponent<
      fairygui.GComponent,
      { txtDesc: fairygui.GTextField; btnCode: UILib.Components.button.Button11; txtCode: fairygui.GTextField },
      string,
      string
    >;
  }
  namespace BizMagicalPrivilege {
    type BizMagicalPrivilegeWindow = __UIComponent<fairygui.GComponent, { list: fairygui.GList }, string, string>;
    type BizMagicalPrivilegeRender = __UIComponent<
      fairygui.GComponent,
      {
        imgLoader: fairygui.GLoader;
        rewardList: fairygui.GList;
        rewardList1: fairygui.GList;
        btnCharge: UILib.Components.button.Button14;
      },
      "chargeState",
      string
    >;
  }
  namespace BizMagicalTask {
    type BizMagicalTaskWindow = __UIComponent<
      fairygui.GComponent,
      { list: fairygui.GList; actDesc: fairygui.GTextField; actTime: fairygui.GTextField },
      string,
      string
    >;
    type BizMagicalTaskRender = __UIComponent<
      fairygui.GComponent,
      {
        txtContent: fairygui.GTextField;
        list: fairygui.GList;
        btnGet: UILib.Components.button.Button11;
        btnGo: UILib.Components.button.Button11;
      },
      "getState",
      string
    >;
  }
  namespace BizMoba {
    type BizMobaWindow = __UIComponent<
      fairygui.GComponent,
      {
        rewardList: fairygui.GList;
        txtTimeDay: fairygui.GTextField;
        roleInView: UILib.Components.roleInView.RoleInView;
        txtTime: fairygui.GTextField;
      },
      string,
      string
    >;
  }
  namespace BizQDPrivilege {
    type BizQDPrivilegeWindow = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        btnLeft: UILib.Components.button.ButtonArrow;
        btnRight: UILib.Components.button.ButtonArrow;
      },
      string,
      string
    >;
    type BizQDPrivilegeRender = __UIComponent<
      fairygui.GComponent,
      {
        titleLoader: fairygui.GLoader;
        rewardList: fairygui.GList;
        txtCost: fairygui.GTextField;
        descLoader: fairygui.GLoader;
        btnGet: UILib.Components.button.Button14;
        redPoint: fairygui.GImage;
      },
      "conCost",
      string
    >;
  }
  namespace BizRank {
    type BizRankWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnList: fairygui.GList;
        condtionList: fairygui.GList;
        helpBtn: BizAct.Components.PlayHelpButton;
        txtMyType: fairygui.GTextField;
        txtRankVal: fairygui.GTextField;
        txtRank: fairygui.GTextField;
        txtTime: fairygui.GTextField;
        btnOpen: BizAct.Components.PlayHelpButton;
        txtType: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type BizRankBtn = __UIComponent<
        fairygui.GButton,
        { txtName: fairygui.GTextField; txtDownName: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
      type BizRankRender = __UIComponent<
        fairygui.GComponent,
        {
          rewardList: fairygui.GList;
          imgRank: fairygui.GLoader;
          txtRank: fairygui.GTextField;
          txtName: fairygui.GTextField;
          txtRankVal: fairygui.GTextField;
        },
        string,
        string
      >;
    }
  }
  namespace BizRankBuy {
    type BizRankBuyWindow = __UIComponent<
      fairygui.GComponent,
      { listTab: fairygui.GList; list: fairygui.GList; helpBtn: BizAct.PlayIntroButton; txtTime: fairygui.GTextField },
      string,
      string
    >;
    type BizRankBuyExtraWindow = __UIComponent<fairygui.GComponent, { rewardList: fairygui.GList }, string, string>;
    namespace Component {
      type BizRankBuyTabRender = __UIComponent<
        fairygui.GButton,
        { txtName: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
      type BizRankBuyRender = __UIComponent<
        fairygui.GComponent,
        {
          btnBuy: UILib.Components.button.Button11;
          txtCount: fairygui.GTextField;
          txtName: fairygui.GTextField;
          rewardList: fairygui.GList;
          imgGet: fairygui.GImage;
          imgMark: fairygui.GLoader;
        },
        "conState",
        string
      >;
      type BizRankBuyExtraRender = __UIComponent<
        fairygui.GComponent,
        {
          txtCount: fairygui.GTextField;
          txtName: fairygui.GTextField;
          rewardList: fairygui.GList;
          btnBuy: UILib.Components.button.Button14;
          imgGet: fairygui.GImage;
          imgMark: fairygui.GLoader;
        },
        "conState",
        string
      >;
    }
  }
  namespace BizShoppingCart {
    type BizShoppingCartWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtTime: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        itemList: fairygui.GList;
        cartList: fairygui.GList;
        txtDiscount: fairygui.GTextField;
        txtOldMoney: fairygui.GTextField;
        txtMoney: fairygui.GTextField;
        btnBuy: UILib.Components.button.Button15;
        imgLine: fairygui.GLoader;
      },
      string,
      string
    >;
    type BizShoppingCartRender = __UIComponent<
      fairygui.GComponent,
      {
        txtName: fairygui.GTextField;
        item: UILib.Components.render.RewardRender2;
        txtMoney: fairygui.GTextField;
        btnAdd: UILib.Components.button.Button15;
        txtCount: fairygui.GTextField;
      },
      string,
      string
    >;
  }
  namespace BizTreasure {
    type BizTreasureWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnGo: BizTreasure.btnOpen;
        txtTime: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        rewardList: fairygui.GList;
      },
      string,
      string
    >;
    type btnOpen = __UIComponent<fairygui.GButton, {}, "button", string>;
    type BizTreasureRender = __UIComponent<
      fairygui.GComponent,
      { txtName: fairygui.GTextField; reward: UILib.Components.render.RewardRender2 },
      string,
      string
    >;
    type BizTreasureRewardWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtTime: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        txtCount: fairygui.GTextField;
        rewardList: fairygui.GList;
        btnGo: BizTreasure.btnOpen;
      },
      string,
      string
    >;
    type BizTreasureRewardRender = __UIComponent<
      fairygui.GComponent,
      {
        btnGet: UILib.Components.button.Button15;
        txtCount: fairygui.GTextField;
        item: UILib.Components.render.RewardRender2;
      },
      string,
      string
    >;
  }
  namespace BizWonderfulBoss {
    type BizWonderfulBossWindow = __UIComponent<fairygui.GComponent, { list: fairygui.GList }, string, string>;
    type BizWonderfulBossRender = __UIComponent<
      fairygui.GComponent,
      {
        txtDesc: fairygui.GTextField;
        list: fairygui.GList;
        btnGet: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
      },
      "conState",
      string
    >;
  }
  namespace BizWonderfulCostLj {
    type BizWonderfulCostLjWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtTimes: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        txtCharge: fairygui.GTextField;
        list: fairygui.GList;
      },
      string,
      string
    >;
    type BizWonderfulCostLjRender = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        btnGet: UILib.Components.button.Button11;
        imgGet: fairygui.GLoader;
        txtLj: fairygui.GTextField;
      },
      string,
      string
    >;
  }
  namespace BizWonderfulExchange {
    type BizWonderfulExchangeWindow = __UIComponent<fairygui.GComponent, { list: fairygui.GList }, string, string>;
    type BizWonderfulExchangeRender = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        btnExchange: UILib.Components.button.Button11;
        txtNeedCount1: fairygui.GTextField;
        txtNeedCount2: fairygui.GTextField;
        redPoint: fairygui.GImage;
        txtCount: fairygui.GTextField;
      },
      string,
      string
    >;
  }
  namespace Boss {
    type BossWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrame; relation: UILibFrame.Components.WindowRelationList },
      string,
      string
    >;
    type BossFieldWindow = __UIComponent<
      fairygui.GComponent,
      { relation: UILibFrame.Components.ViewRelationList },
      string,
      string
    >;
    type BossRareWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnList: fairygui.GList;
        tabList: fairygui.GList;
        mapList: fairygui.GList;
        mod: fairygui.GGraph;
        modName: fairygui.GTextField;
        dropList: fairygui.GList;
        btnAttention: Boss.Components.BossRareAttentionRender;
        txtDesc: fairygui.GTextField;
        btnRight: UILib.Components.button.ButtonArrow;
        btnLeft: UILib.Components.button.ButtonArrow;
      },
      string,
      string
    >;
    type BossDropWindow = __UIComponent<
      fairygui.GComponent,
      { topDropList: fairygui.GList; dropList: fairygui.GList },
      string,
      string
    >;
    type BossHEWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnList: fairygui.GList;
        tabList: fairygui.GList;
        mod: fairygui.GGraph;
        dropList: fairygui.GList;
        btnAttention: Boss.Components.BossRareAttentionRender;
        txtDesc: fairygui.GTextField;
        dropTxt: fairygui.GTextField;
        modName: fairygui.GTextField;
        mapList: fairygui.GList;
        btnRight: UILib.Components.button.ButtonArrow;
        btnLeft: UILib.Components.button.ButtonArrow;
      },
      string,
      string
    >;
    namespace Components {
      type BossFieldRender = __UIComponent<
        fairygui.GButton,
        { mapName: fairygui.GTextField; mapLimit: fairygui.GTextField; mapHaveCount: fairygui.GTextField },
        "button",
        string
      >;
      type BossRareRender = __UIComponent<
        fairygui.GButton,
        {
          openBg: fairygui.GLoader;
          closeBg: fairygui.GLoader;
          mapName: fairygui.GTextField;
          mapLimit: fairygui.GTextField;
          mapTimes: fairygui.GTextField;
        },
        "button",
        string
      >;
      type BossRareAttentionRender = __UIComponent<fairygui.GButton, {}, "button" | "conAtten", string>;
      type BossDropRender = __UIComponent<
        fairygui.GComponent,
        {
          bg: fairygui.GImage;
          txtTime: fairygui.GTextField;
          imgTop: fairygui.GLoader;
          txtContent: fairygui.GTextField;
        },
        string,
        string
      >;
      type BossRareBtnRender = __UIComponent<
        fairygui.GButton,
        { titleName: fairygui.GTextField; redPoint: fairygui.GImage; mapCount: fairygui.GTextField },
        "button",
        string
      >;
      type BossPersonRender = __UIComponent<
        fairygui.GButton,
        { imgIcon: fairygui.GLoader; imgName: fairygui.GLoader; imgVip: fairygui.GLoader },
        "button" | "conState",
        string
      >;
      type BossFieldTabRender = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; titleDown: fairygui.GTextField; imgRec: fairygui.GImage },
        "button",
        string
      >;
    }
    namespace field {
      type BossFieldView = __UIComponent<
        fairygui.GComponent,
        {
          btnList: fairygui.GList;
          mapList: fairygui.GList;
          modLeft: fairygui.GGraph;
          modRight: fairygui.GGraph;
          modLeftName: fairygui.GTextField;
          modRightName: fairygui.GTextField;
          dropList: fairygui.GList;
          btnRight: UILib.Components.button.ButtonArrow;
          btnLeft: UILib.Components.button.ButtonArrow;
        },
        string,
        string
      >;
      type BossPersonView = __UIComponent<
        fairygui.GComponent,
        {
          mod: fairygui.GGraph;
          list: fairygui.GList;
          imgName: fairygui.GLoader;
          rewardList: fairygui.GList;
          txtLv: fairygui.GTextField;
          txtCount: fairygui.GTextField;
          btnChallenge: UILib.Components.button.Button11;
        },
        string,
        string
      >;
    }
  }
  namespace BossReward {
    type BossRewardWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        typeList: fairygui.GList;
        rewardList: fairygui.GList;
        btnGet: UILib.Components.button.Button11;
        imgGot: fairygui.GLoader;
        bossList: fairygui.GList;
      },
      "conState",
      string
    >;
    type BossRewardSelectRender = __UIComponent<
      fairygui.GButton,
      { imgType: fairygui.GLoader; txtNum: fairygui.GTextField },
      "button" | "conState",
      string
    >;
    type BossRewardRender = __UIComponent<
      fairygui.GComponent,
      {
        mod: fairygui.GGraph;
        txtName: fairygui.GTextField;
        txtLv: fairygui.GTextField;
        txtMap: fairygui.GTextField;
        btnChallenge: UILib.Components.button.Button2_Orange;
      },
      "conState",
      string
    >;
    type BossRewardItemRender = __UIComponent<
      fairygui.GComponent,
      { item: UILib.Components.render.ItemCFGRender; num: fairygui.GTextField },
      string,
      string
    >;
  }
  namespace BreakLine {
    type BreakLineView = __UIComponent<
      fairygui.GComponent,
      { btnLogin: BreakLine.Components.Button2; txtTime: fairygui.GTextField },
      "ctr_show",
      "break_line"
    >;
    namespace Components {
      type Button2 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
  }
  namespace BrilliantTask {
    type BrilliantTaskWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderBackL: fairygui.GLoader;
        loaderBackR0: fairygui.GLoader;
        loaderBackR1: fairygui.GLoader;
        loaderTitle: fairygui.GLoader;
        loaderTitle0: fairygui.GLoader;
        loaderTitle1: fairygui.GLoader;
        loaderAward: fairygui.GLoader;
        loaderName: fairygui.GLoader;
        loaderRCKH: fairygui.GLoader;
        loaderEnd: fairygui.GLoader;
        iconFower0: fairygui.GImage;
        iconFower1: fairygui.GImage;
        iconFower2: fairygui.GImage;
        iconFower3: fairygui.GImage;
        listBri: fairygui.GList;
        listItem: fairygui.GList;
        renderGold: UILib.Components.render.RewardRender;
        renderShenWu: UILib.Components.render.RewardRender;
        btnTaskGet: UILib.Components.button.Button2_Blue;
        btnTaskEnter: UILib.Components.button.Button2_Orange;
        btnComFast: UILib.Components.button.Button2_Orange;
        btnTaskGet0: UILib.Components.button.Button2_Orange;
        btnTaskGet2: UILib.Components.button.Button2_Orange;
        btnGet: UILib.Components.button.Button2_Orange;
        txtCount: fairygui.GTextField;
        txtMoney: fairygui.GTextField;
        txtBriVal: fairygui.GTextField;
        txtCountGet: fairygui.GTextField;
        txtCardDesc: fairygui.GRichTextField;
      },
      "conState",
      string
    >;
    namespace Components {
      type BriTaskRender = __UIComponent<
        fairygui.GButton,
        { loaderIcon: fairygui.GLoader; iconSel: fairygui.GImage; loderEnd: fairygui.GLoader },
        "button",
        string
      >;
    }
  }
  namespace BuyEquip {
    type BuyEquipWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameActivity;
        txtFight: fairygui.GTextField;
        txtRank: fairygui.GTextField;
        txtTime: fairygui.GTextField;
        rewardList: fairygui.GList;
        btnBuy: BuyEquip.btnBuy;
      },
      "conTitle",
      string
    >;
    type btnBuy = __UIComponent<fairygui.GButton, {}, "button", string>;
    type BuyEquipRender = __UIComponent<
      fairygui.GComponent,
      { reward: UILib.Components.render.RewardRender2; txtName: fairygui.GTextField },
      string,
      string
    >;
  }
  namespace CapitalAct {
    namespace Component {
      type CapitalBankRender = __UIComponent<
        fairygui.GComponent,
        { list: fairygui.GList; btnGet: UILib.Components.button.Button11; txtLimit: fairygui.GTextField },
        string,
        string
      >;
      type CapitalShopRender = __UIComponent<
        fairygui.GComponent,
        {
          txtName: fairygui.GTextField;
          list: fairygui.GList;
          txtCost: fairygui.GTextField;
          btnBuy: UILib.Components.button.Button14;
          txtLimit: fairygui.GTextField;
          red: fairygui.GImage;
        },
        string,
        string
      >;
    }
    type CapitalBankWindow = __UIComponent<
      fairygui.GComponent,
      { txtTimes: fairygui.GTextField; txtDesc: fairygui.GTextField; list: fairygui.GList },
      string,
      string
    >;
    type CapitalShopWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtTimes: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        list: fairygui.GList;
        btnR: UILibFrame.Components.ButtonSbArrow;
        btnL: UILibFrame.Components.ButtonSbArrow;
      },
      string,
      string
    >;
  }
  namespace CapitalWar {
    type CapitalWarWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtDesc1: fairygui.GTextField;
        txtDesc2: fairygui.GTextField;
        txtDesc3: fairygui.GTextField;
        txtDesc4: fairygui.GTextField;
        btnReturn: UILib.Components.button.Button2_Blue;
        rewardList: fairygui.GList;
        mod1: CapitalWar.CapitalWarRender;
        mod2: CapitalWar.CapitalWarRender;
        mod3: CapitalWar.CapitalWarRender;
        mod4: CapitalWar.CapitalWarRender;
        mod5: CapitalWar.CapitalWarRender;
        modBox: fairygui.GGroup;
        btnEnter: CapitalWar.ButtonEnter;
        txtDesc: fairygui.GRichTextField;
        txtGuildName: fairygui.GTextField;
      },
      "conState" | "conOpen",
      string
    >;
    type ButtonEnter = __UIComponent<fairygui.GButton, {}, "button", string>;
    type CapitalWarRender = __UIComponent<
      fairygui.GComponent,
      {
        imgShadow: fairygui.GLoader;
        roleInView: UILib.Components.roleInView.RoleInView;
        modTitle: fairygui.GGraph;
        txtName: fairygui.GTextField;
      },
      string,
      string
    >;
    type CapitalWarNoticeWindow = __UIComponent<
      fairygui.GComponent,
      { close: UILibFrame.Components.ButtonTipsClose; funcIcon: fairygui.GLoader },
      string,
      string
    >;
    type CapitalWarMainWindow = __UIComponent<
      fairygui.GComponent,
      { close: UILibFrame.Components.ButtonClose; relation: CapitalWar.WindowRelationList },
      string,
      string
    >;
    type WindowRelationList = __UIComponent<fairygui.GComponent, { listBtn: fairygui.GList }, string, string>;
    namespace moba {
      type CrossServerMBWindow = __UIComponent<
        fairygui.GComponent,
        {
          btnPhb: CapitalWar.moba.CrossServerMBComBtn;
          btnSjjl: CapitalWar.moba.CrossServerMBComBtn;
          btnDwjl: CapitalWar.moba.CrossServerMBComBtn;
          btnJjsd: CapitalWar.moba.CrossServerMBComBtn;
          stageLoader: fairygui.GLoader;
          txtTime: fairygui.GTextField;
          awardList: fairygui.GList;
          txtScore: fairygui.GTextField;
          btnPlayDes: UILib.Components.button.ButtonLabel;
          btnStart: UILib.Components.button.Button11;
          txtAwardCount: fairygui.GTextField;
          lvLoader: fairygui.GLoader;
          starList: fairygui.GList;
          btnMrjl: CapitalWar.moba.CrossServerMBComBtn;
          txtMatchTime: fairygui.GTextField;
          btnStartRed: fairygui.GImage;
          txtDesc1: fairygui.GTextField;
          txtDesc2: fairygui.GTextField;
          txtDesc3: fairygui.GTextField;
          txtDesc4: fairygui.GTextField;
          btnReturn: UILib.Components.button.Button2_Blue;
        },
        "viewCon",
        string
      >;
      type CrossServerMBComBtn = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; red: fairygui.GImage },
        "button",
        string
      >;
      type CrossServerStageAwardWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameThree;
          txtName: fairygui.GTextField;
          txtSpecialName: fairygui.GTextField;
          txtDesc: fairygui.GTextField;
          list: fairygui.GList;
          mod: fairygui.GGraph;
        },
        string,
        string
      >;
      type CrossServerSeasonAwardWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameThree;
          txtName: fairygui.GTextField;
          txtSpecialName: fairygui.GTextField;
          txtDesc: fairygui.GTextField;
          list: fairygui.GList;
          roleGraph: fairygui.GGraph;
        },
        string,
        string
      >;
      type CrossServerStageAwardRender = __UIComponent<
        fairygui.GComponent,
        { awardList: fairygui.GList; btnGet: UILib.Components.button.Button17; lvLoader: fairygui.GLoader },
        "awardCon",
        string
      >;
      type CrossServerSeasonAwardRender = __UIComponent<
        fairygui.GComponent,
        { awardList: fairygui.GList; rankLoader: fairygui.GLoader },
        string,
        string
      >;
    }
    namespace mobaMall {
      type CrossServerMBMallWindow = __UIComponent<
        fairygui.GComponent,
        { contentArea: UILibFrame.Components.comFrameThree; list: fairygui.GList; txtMoney: fairygui.GTextField },
        string,
        string
      >;
      type CrossServerMBMallRender = __UIComponent<
        fairygui.GComponent,
        {
          txtName: fairygui.GTextField;
          txtNeedVal: fairygui.GTextField;
          txtLimit: fairygui.GTextField;
          btnBuy: UILib.Components.button.Button17;
          render: UILib.Components.render.ItemCFGRender;
        },
        string,
        string
      >;
    }
    namespace team {
      type CrossServerTeamWindow = __UIComponent<
        fairygui.GComponent,
        {
          txtMapName: fairygui.GTextField;
          mapList: fairygui.GList;
          rewardList: fairygui.GList;
          btnRefresh: UILib.Components.button.Button12;
          btnSearch: UILib.Components.button.ButtonSearch;
          txtSearchNum: fairygui.GTextField;
          roomList: fairygui.GList;
          memberList: fairygui.GList;
          btnChangeName: UILib.Components.button.Button13;
          btnChangeFight: UILib.Components.button.Button13;
          txtMyRoomCout: fairygui.GTextField;
          txtMyRoomName: fairygui.GTextField;
          txtMyRoomFight: fairygui.GTextField;
          txtLastCount: fairygui.GTextField;
          txtPrivlelegeCount: fairygui.GTextField;
          btnOpenPrivilege: UILib.Components.button.ButtonLabel;
          btnExit: UILib.Components.button.Button2_Green;
          btnStart: UILib.Components.button.Button2_Orange;
          btnCreate: UILib.Components.button.Button2_Orange;
          btnReJoin: UILib.Components.button.Button2_Orange;
        },
        "roomCon",
        string
      >;
      type CrossServerTeamMapRender = __UIComponent<
        fairygui.GButton,
        {
          bgLoader: fairygui.GLoader;
          txtLevel: fairygui.GTextField;
          txtLimitDes: fairygui.GTextField;
          helpBtn: UILib.Components.button.ButtonHelp;
          btnGift: CapitalWar.team.Button1;
          noneBgLoader: fairygui.GLoader;
        },
        "button" | "openState",
        string
      >;
      type CrossServerTeamRoomRender = __UIComponent<
        fairygui.GComponent,
        {
          txtRoomNum: fairygui.GTextField;
          txtRoomName: fairygui.GTextField;
          txtRoomFight: fairygui.GTextField;
          txtRoomMember: fairygui.GTextField;
          btnJoin: UILib.Components.button.ButtonLabel;
        },
        "bgCon" | "stateCon",
        string
      >;
      type CrossServerTeamMemberRender = __UIComponent<
        fairygui.GComponent,
        {
          roleHead: fairygui.GLoader;
          leaderLoader: fairygui.GLoader;
          txtName: fairygui.GTextField;
          txtFight: fairygui.GTextField;
          btnKick: UILib.Components.button.Button6;
        },
        "joinCon" | "stateCon",
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace ChangeName {
    type ChangeNameWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonClose;
        txtContent: fairygui.GTextField;
        txtTitle: fairygui.GTextField;
        item: UILib.Components.render.ItemCFGRender;
        btnSure: UILib.Components.button.Button11;
        txtCount: fairygui.GTextField;
        txtInput: fairygui.GTextField;
      },
      string,
      string
    >;
  }
  namespace Chat {
    type ChatWindow = __UIComponent<
      fairygui.GComponent,
      { comChat: Chat.comChat; chatQuick: Chat.ChatQuickWindow; comInputPreview: Chat.ChatInputPreview },
      "conOpen",
      string
    >;
    type ChatQuickWindow = __UIComponent<
      fairygui.GComponent,
      {
        iconFrame1: fairygui.GImage;
        listFace: fairygui.GList;
        listFaceBig: fairygui.GList;
        btnFace1: UILib.Components.button.CheckBox2;
        btnFace2: UILib.Components.button.CheckBox2;
        comFaceHint: Chat.Components.comFaceHint;
        groupFace: fairygui.GGroup;
        listItem: fairygui.GList;
        btnBag: Chat.Components.ButtonChatItem;
        btnBagZ: Chat.Components.ButtonChatItem;
        groupItem: fairygui.GGroup;
        listChannel: fairygui.GList;
        groupSetting: fairygui.GGroup;
        btnFace: Chat.Components.ButtonFunc;
        btnItem: Chat.Components.ButtonFunc;
        btnSetting: Chat.Components.ButtonFunc;
        btnPos: Chat.Components.ButtonFunc;
      },
      "conFace" | "conBag" | "conType",
      string
    >;
    type comChat = __UIComponent<
      fairygui.GComponent,
      {
        iconFrame: fairygui.GImage;
        iconFrameL: fairygui.GImage;
        iconFrameR: fairygui.GImage;
        groupFrame: fairygui.GGroup;
        listChannel: fairygui.GList;
        listChat: fairygui.GList;
        listSecretChat: fairygui.GList;
        inputCom: Chat.Components.InputCom;
        guildHint: Chat.Components.ChatGuildHint;
        teamHint: Chat.Components.ChatTeamHint;
        iconHintBg: fairygui.GImage;
        btnBack: Chat.Components.ButtonBack;
        btnSecret: Chat.Components.ChatSecretRender;
        listSecretBg: fairygui.GImage;
        listSecret: fairygui.GList;
        listSecretGroup: fairygui.GGroup;
      },
      "conIsSecret",
      string
    >;
    type ChatRoleWindow = __UIComponent<
      fairygui.GComponent,
      {
        iconFrame: fairygui.GImage;
        btnLook: UILib.Components.button.Button8;
        btnSecret: UILib.Components.button.Button8;
        btnTeamEnter: UILib.Components.button.Button8;
        btnTeamInvite: UILib.Components.button.Button8;
        btnFriendAdd: UILib.Components.button.Button8;
        btnFriendRemove: UILib.Components.button.Button8;
        btnBlackAdd: UILib.Components.button.Button8;
        btnBlackRemove: UILib.Components.button.Button8;
      },
      string,
      string
    >;
    type ChatInputPreview = __UIComponent<
      fairygui.GComponent,
      { txt: fairygui.GTextField; btnPreviewOk: UILib.Components.button.Button2_Orange },
      string,
      string
    >;
    namespace Components {
      type ChatRightRender = __UIComponent<
        fairygui.GComponent,
        {
          iconTextbg: fairygui.GImage;
          loaderHead: fairygui.GLoader;
          loaderChannel: fairygui.GLoader;
          txtName: fairygui.GTextField;
          txtMsg: fairygui.GRichTextField;
        },
        string,
        string
      >;
      type ChatLeftRender = __UIComponent<
        fairygui.GComponent,
        {
          iconTextbg: fairygui.GImage;
          loaderHead: fairygui.GLoader;
          loaderChannel: fairygui.GLoader;
          txtName: fairygui.GTextField;
          txtMsg: fairygui.GRichTextField;
        },
        string,
        string
      >;
      type ChannelRender = __UIComponent<
        fairygui.GButton,
        {
          iconbg: fairygui.GImage;
          iconSelect: fairygui.GImage;
          title: fairygui.GTextField;
          iconRed: fairygui.GImage;
          iconWD: fairygui.GImage;
        },
        "button",
        string
      >;
      type ChatSecretRoleRender = __UIComponent<
        fairygui.GButton,
        { btnClose: Chat.Components.Button1; txtName: fairygui.GTextField },
        "button",
        string
      >;
      type InputCom = __UIComponent<
        fairygui.GComponent,
        {
          iconInputBg: fairygui.GImage;
          btnQuick: Chat.Components.ButtonAdd;
          txtInputChat: fairygui.GTextField;
          textNotSend: fairygui.GTextField;
          btnSend: Chat.Components.ButtonSend;
          btnMicr: Chat.Components.ButtonMicr;
          btnSetting: Chat.Components.ButtonSetting;
        },
        "conIsSend",
        string
      >;
      type FaceRender = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type ChatSystemRender = __UIComponent<
        fairygui.GComponent,
        { loaderChannel: fairygui.GLoader; txtMsg: fairygui.GRichTextField },
        string,
        string
      >;
      type ChatSetRender = __UIComponent<
        fairygui.GButton,
        { iconCheck0: fairygui.GImage; iconCheck1: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type ChatFaceRender = __UIComponent<fairygui.GButton, { loaderFace: fairygui.GLoader }, "button", string>;
      type ChatHeadRdo = __UIComponent<
        fairygui.GButton,
        {
          iconFrame: fairygui.GImage;
          iconRoleBg: fairygui.GImage;
          iconNameBg: fairygui.GImage;
          icon: fairygui.GLoader;
          red: fairygui.GLoader;
          close: fairygui.GLoader;
          title: fairygui.GTextField;
        },
        "button",
        string
      >;
      type comHint = __UIComponent<fairygui.GComponent, { iconHintBg: fairygui.GImage }, string, string>;
      type ButtonFunc = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type ChatInputRender = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
      type ChatFaceBRender = __UIComponent<fairygui.GButton, { graph: fairygui.GGraph }, "button", string>;
      type ButtonReture = __UIComponent<
        fairygui.GButton,
        { iconbg: fairygui.GImage; iconSelect: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type comFaceHint = __UIComponent<
        fairygui.GComponent,
        { loaderBack: fairygui.GImage; txtHint: fairygui.GTextField },
        string,
        string
      >;
      type ButtonFuncPos = __UIComponent<fairygui.GButton, { iconPos: fairygui.GImage }, "button", string>;
      type ButtonAdd = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonSetting = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ChatGuildHint = __UIComponent<
        fairygui.GComponent,
        { loaderBack: fairygui.GImage; btnJoinGuild: Chat.Components.ChannelRender },
        string,
        string
      >;
      type ChatTeamHint = __UIComponent<
        fairygui.GComponent,
        { loaderBack: fairygui.GImage; btnJoinTeam: Chat.Components.ChannelRender },
        string,
        string
      >;
      type ButtonBack = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonSend = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonMicr = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ChatSecretRender = __UIComponent<
        fairygui.GButton,
        { txtName: fairygui.GTextField },
        "button" | "conArrow",
        string
      >;
      type ButtonChatItem = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
  }
  namespace CommonTBTip {
    type CommonTBTipWindow = __UIComponent<fairygui.GComponent, { itemList: fairygui.GList }, string, string>;
    type CommonTBTxtTipWindow = __UIComponent<fairygui.GComponent, { txtDesc: fairygui.GTextField }, string, string>;
    namespace Components {
      type CommonTBTipRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.RewardRender; txtName: fairygui.GTextField; txtCount: fairygui.GTextField },
        string,
        string
      >;
    }
  }
  namespace Copy {
    namespace View.hunLuan {
      type HunLuanSyEnterWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameTwo;
          titleIcon: fairygui.GLoader;
          btnHelp: UILib.Components.button.ButtonHelp;
          enterBtn: UILib.Components.button.Button9;
          rewardList: fairygui.GList;
          enterLevel: fairygui.GTextField;
          timeStr: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace View.activity {
      type ActCopyWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameTwo;
          titleIcon: fairygui.GLoader;
          btnHelp: UILib.Components.button.ButtonHelp;
          btnEnter: UILib.Components.button.Button9;
          rewardList: fairygui.GList;
          txt_condition: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Components {
      type comExplain = __UIComponent<fairygui.GComponent, { explain: fairygui.GTextField }, string, string>;
      type comExplain1 = __UIComponent<fairygui.GButton, { title: fairygui.GRichTextField }, string, string>;
      type freeBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type doubleBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonClose = __UIComponent<fairygui.GButton, {}, "button", string>;
      type close = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
    namespace View.shaChengAnGe {
      type ScriptEnterWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameTwo;
          enterBtn: UILib.Components.button.Button9;
          helpBtn: UILib.Components.button.ButtonHelp;
          loaderTitle: fairygui.GLoader;
          rewardList: fairygui.GList;
          enterStr: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace View.exp {
      type TaskExpCopyWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameTwo;
          enterBtn: UILib.Components.button.Button9;
          enterLevel: fairygui.GTextField;
          count: fairygui.GTextField;
          timeStr: fairygui.GTextField;
          rewardList: fairygui.GList;
          btnHelp: UILib.Components.button.ButtonHelp;
        },
        string,
        string
      >;
      type TaskExpCopyRewardGetWindow = __UIComponent<
        fairygui.GComponent,
        {
          loaderFrame: fairygui.GLoader;
          loaderTitle: fairygui.GLoader;
          get1Btn: Copy.Components.close;
          timer: fairygui.GTextField;
          exp: fairygui.GTextField;
          txtCard: fairygui.GTextField;
          rewardList: fairygui.GList;
        },
        string,
        string
      >;
    }
    namespace View.swdt {
      type ShenWuDtWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameTwo;
          enterBtn: UILib.Components.button.Button9;
          helpBtn: UILib.Components.button.ButtonHelp;
          loaderTitle: fairygui.GLoader;
          rewardList: fairygui.GList;
          level: fairygui.GTextField;
          timeStr: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace View.moGong {
      type MoGongWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameTwo;
          titleIcon: fairygui.GLoader;
          btnHelp: UILib.Components.button.ButtonHelp;
          btnEnter: UILib.Components.button.Button9;
          rewardList: fairygui.GList;
          txt_condition: fairygui.GTextField;
        },
        string,
        string
      >;
    }
  }
  namespace CreateRole {
    type CreateRoleView = __UIComponent<
      fairygui.GComponent,
      {
        bgLoader: fairygui.GLoader;
        roleCom: fairygui.GLoader;
        roleJobCom: fairygui.GLoader;
        btnRefreshName: CreateRole.Components.BtnRefreshName;
        txtName: fairygui.GTextField;
        btnReturn: CreateRole.Components.BtnReturn;
        txtExistName: fairygui.GTextField;
        txtInfo: fairygui.GTextField;
        btnEnterGame: CreateRole.Components.BtnEnterGame;
        txSwitchCD: fairygui.GTextField;
        timePrefix: fairygui.GTextField;
        txtTime: fairygui.GTextField;
        btnJobDao: CreateRole.Components.BtnJobDao;
        btnJobZhan: CreateRole.Components.BtnJobZhan;
        btnJobFa: CreateRole.Components.BtnJobFa;
      },
      "genderCtrl" | "jobCtrl" | "roleCtrl",
      string
    >;
    namespace Components {
      type BtnRefreshName = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnEnterGame = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; mod: fairygui.GGraph },
        "button",
        string
      >;
      type BtnReturn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button3 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button4 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnJobFa = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type BtnJobDao = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type BtnJobZhan = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
  }
  namespace CrossServer {
    type CrossServerWindow = __UIComponent<
      fairygui.GComponent,
      { close: UILibFrame.Components.ButtonClose; tabList: fairygui.GList },
      string,
      string
    >;
    type CrossServerExitWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameBg;
        txtDesc: fairygui.GTextField;
        btnGo: UILib.Components.button.Button2_Orange;
        txtName: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace darkForest {
      type CrossServerDFWindow = __UIComponent<
        fairygui.GComponent,
        {
          model: fairygui.GGraph;
          typeList: fairygui.GList;
          bossList: fairygui.GList;
          btnRight: CrossServer.Components.btnLeft;
          btnLeft: CrossServer.Components.btnLeft;
          btnEnter: UILib.Components.button.Button111;
          imgName: fairygui.GLoader;
          txtLv: fairygui.GTextField;
          rewardList: fairygui.GList;
          txtNeedLv: fairygui.GTextField;
          txtTime: fairygui.GTextField;
          txtDesc: fairygui.GTextField;
        },
        "conRefresh",
        string
      >;
      type CrossServerDFBossRender = __UIComponent<
        fairygui.GButton,
        { imgIcon: fairygui.GLoader; txtName: fairygui.GTextField },
        "button",
        string
      >;
      type CrossServerDFRender = __UIComponent<fairygui.GButton, { imgTitle: fairygui.GLoader }, "button", string>;
      type CrossSeverDFBossRender = __UIComponent<
        fairygui.GButton,
        { imgIcon: fairygui.GLoader; txtName: fairygui.GTextField },
        "button",
        string
      >;
      type CrossSeverDFRender = __UIComponent<fairygui.GButton, { imgTitle: fairygui.GLoader }, "button", string>;
    }
    namespace Components {
      type btnLeft = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
    namespace forbiddenArea {
      type CrossServerFAWindow = __UIComponent<
        fairygui.GComponent,
        {
          model: fairygui.GGraph;
          btnEnter: UILib.Components.button.Button111;
          imgName: fairygui.GLoader;
          txtLv: fairygui.GTextField;
          rewardList: fairygui.GList;
          txtNeedLv: fairygui.GTextField;
          txtTime: fairygui.GTextField;
          txtDesc: fairygui.GTextField;
          bossList: fairygui.GList;
        },
        "conState",
        string
      >;
      type CrossServerFARender = __UIComponent<
        fairygui.GButton,
        { imgName: fairygui.GLoader; txtState: fairygui.GTextField },
        "button",
        string
      >;
      type CrossServerRewardWindow = __UIComponent<
        fairygui.GComponent,
        { rewardList: fairygui.GList; btnOk: UILib.Components.button.Button2_Orange },
        string,
        string
      >;
    }
    namespace holyTerritory {
      type CrossServerHTWindow = __UIComponent<
        fairygui.GComponent,
        {
          bossList: fairygui.GList;
          txtDesc: fairygui.GTextField;
          dropList: fairygui.GList;
          txtNeedName: fairygui.GTextField;
          btnAdd: UILib.Components.button.ButtonAdd2;
          btnEnter: UILib.Components.button.Button111;
          btnRight: UILibFrame.Components.ButtonSbArrow;
          btnLeft: UILibFrame.Components.ButtonSbArrow;
        },
        string,
        string
      >;
      type CrossServerHTRender = __UIComponent<
        fairygui.GButton,
        {
          txtIcon: fairygui.GLoader;
          txtName: fairygui.GTextField;
          txtNeed: fairygui.GTextField;
          txtTime: fairygui.GTextField;
        },
        "button" | "conState",
        string
      >;
    }
    namespace mall {
      type CrossServerMallWindow = __UIComponent<
        fairygui.GComponent,
        { mallList: fairygui.GList; comAttr: CrossServer.mall.comAttr },
        string,
        string
      >;
      type comAttr = __UIComponent<
        fairygui.GButton,
        { iconBack: fairygui.GImage; icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
      type CrossServerMallRender = __UIComponent<
        fairygui.GComponent,
        {
          txtName: fairygui.GTextField;
          item: UILib.Components.render.ItemCFGRender;
          txtLimit: fairygui.GTextField;
          txtCount: fairygui.GTextField;
          imgMoeny: fairygui.GLoader;
          txtMoney: fairygui.GTextField;
          btnBuy: UILib.Components.button.Button2_Orange;
        },
        "conState",
        string
      >;
    }
  }
  namespace Cumstance {
    type CumstanceWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrame; relation: UILibFrame.Components.WindowRelationList },
      string,
      string
    >;
    type TransmigrationWindow = __UIComponent<
      fairygui.GComponent,
      {
        introBtn: UILib.Components.button.ButtonHelp;
        textConditionDesc: fairygui.GTextField;
        txtTransmigrateLevel: fairygui.GTextField;
        attrList: fairygui.GList;
        nextAttrList: fairygui.GList;
        btnPrivilege: Cumstance.Components.ButtonPrivilege;
        itemNecklace: UILib.Components.render.ItemCFGRender;
        imgRealName: fairygui.GLoader;
        imgMax: fairygui.GImage;
        round1: fairygui.GLoader;
        round8: fairygui.GLoader;
        round9: fairygui.GLoader;
        round7: fairygui.GLoader;
        round6: fairygui.GLoader;
        round5: fairygui.GLoader;
        round4: fairygui.GLoader;
        round3: fairygui.GLoader;
        round2: fairygui.GLoader;
        roleInView: UILib.Components.roleInView.RoleInView;
        xzzl: fairygui.GLoader;
        textCostPrefix: fairygui.GTextField;
        item: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        textCostBreak: fairygui.GTextField;
        textPercentBreak: fairygui.GTextField;
        costAttrName: fairygui.GTextField;
        costAttrValue: fairygui.GTextField;
        haveAttrName: fairygui.GTextField;
        haveAttrValue: fairygui.GTextField;
        transmigrateBtn: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
        soulModel: fairygui.GGraph;
      },
      "maxCon" | "round",
      string
    >;
    type SoulBreakWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtLevel: fairygui.GTextField;
        txtFight: fairygui.GTextField;
        listBg1: fairygui.GList;
        listBg2: fairygui.GList;
        txtAttrName: fairygui.GTextField;
        txtNextAttrName: fairygui.GTextField;
        textAttrValue: fairygui.GTextField;
        textNextAttrValue: fairygui.GTextField;
        txtIntro: fairygui.GTextField;
        btnFunc: Cumstance.Components.BtnFucOpen;
        btnRed: Cumstance.Components.BtnRed;
        btnGreen: Cumstance.Components.BtnGreen;
        btnBlue: Cumstance.Components.BtnBlue;
        btnYellow: Cumstance.Components.BtnYellow;
        selectRound: fairygui.GImage;
        txtRedLv: fairygui.GTextField;
        txtBlueLv: fairygui.GTextField;
        txtGreenLv: fairygui.GTextField;
        txtYellowLv: fairygui.GTextField;
        item: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        btnLvUp: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
        lvUpGroup: fairygui.GGroup;
        redPoint1: fairygui.GImage;
        redPoint2: fairygui.GImage;
        redPoint3: fairygui.GImage;
        redPoint4: fairygui.GImage;
        btnTurn: Cumstance.Components.btnMainTurn;
        txtResetCount: fairygui.GTextField;
        turnRed: fairygui.GImage;
        roleInView: UILib.Components.roleInView.RoleInView;
        imgMax: fairygui.GImage;
      },
      string,
      string
    >;
    type SoulBreakFuncWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrameTwo; list: fairygui.GList; txtSoul: fairygui.GTextField },
      string,
      string
    >;
    type EpithetWindow = __UIComponent<
      fairygui.GComponent,
      {
        item: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        btnLvUp: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
        lvUpGroup: fairygui.GGroup;
        listbg1: fairygui.GList;
        textAttrName: fairygui.GTextField;
        textAttrValue: fairygui.GTextField;
        imgCur: fairygui.GLoader;
        spAttrVal: fairygui.GTextField;
        listbg2: fairygui.GList;
        textNextAttrName: fairygui.GTextField;
        textNextAttrValue: fairygui.GTextField;
        imgNext: fairygui.GLoader;
        spNextAttrVal: fairygui.GTextField;
        nextGroup: fairygui.GGroup;
        imgArrow: fairygui.GLoader;
        imgMax2: fairygui.GImage;
        imgMax1: fairygui.GImage;
      },
      string,
      string
    >;
    type SoulBreakTurnWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnReset: Cumstance.Components.btnReset;
        item7: UILib.Components.render.RewardRenderSmall;
        item0: UILib.Components.render.RewardRenderSmall;
        item1: UILib.Components.render.RewardRenderSmall;
        item6: UILib.Components.render.RewardRenderSmall;
        item2: UILib.Components.render.RewardRenderSmall;
        item5: UILib.Components.render.RewardRenderSmall;
        item4: UILib.Components.render.RewardRenderSmall;
        item3: UILib.Components.render.RewardRenderSmall;
        boxList: fairygui.GGroup;
        imgArrows: fairygui.GImage;
        btnTurn: Cumstance.Components.btnTurn;
        imgNeed: fairygui.GLoader;
        txtCount: fairygui.GTextField;
        bar: Cumstance.Components.turnBar;
        btnDesc: Cumstance.Components.btnDesc;
        close: UILib.Components.button.ButtonClose1;
        btnSkip: UILib.Components.button.CheckBox3;
      },
      "conState",
      string
    >;
    namespace Components {
      type BtnFucOpen = __UIComponent<fairygui.GButton, {}, string, string>;
      type BtnRed = __UIComponent<fairygui.GButton, {}, string, string>;
      type BtnGreen = __UIComponent<fairygui.GButton, {}, string, string>;
      type BtnYellow = __UIComponent<fairygui.GButton, {}, string, string>;
      type BtnBlue = __UIComponent<fairygui.GButton, {}, string, string>;
      type SoulBreakFuncRender = __UIComponent<
        fairygui.GComponent,
        { txtLv: fairygui.GTextField; txtDesc: fairygui.GTextField },
        string,
        string
      >;
      type TransmigrationRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtValue: fairygui.GTextField },
        string,
        string
      >;
      type ButtonPrivilege = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
      type btnReset = __UIComponent<fairygui.GButton, {}, "button", string>;
      type btnTurn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type turnBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type btnDesc = __UIComponent<fairygui.GButton, {}, "button", string>;
      type btnMainTurn = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace Debug {
    type DebugWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnClose: Debug.Components.BtnLogin;
        btnGM: Debug.Components.BtnLogin;
        btnClear: Debug.Components.BtnLogin;
        btnCopy: Debug.Components.BtnLogin;
        txtLog: fairygui.GTextField;
        txtGM: fairygui.GTextField;
        txtHost: fairygui.GTextField;
        txtPort: fairygui.GTextField;
        txtAccount: fairygui.GTextField;
        txtToken: fairygui.GTextField;
        txtServer: fairygui.GTextField;
        serverList: Debug.Components.serverList;
        hostAdd: Debug.Components.BtnLogin;
        btnLogin: Debug.Components.BtnLogin;
      },
      "selectSever" | "loginType",
      string
    >;
    type DebugLogWindow = __UIComponent<
      fairygui.GComponent,
      {
        logComp: Debug.Components.TxtLog;
        close: Debug.Components.BtnLogin;
        btnClean: Debug.Components.BtnLogin;
        btnBreakLine: Debug.Components.BtnLogin;
      },
      string,
      string
    >;
    namespace Components {
      type BtnLogin = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, string, string>;
      type serverList = __UIComponent<fairygui.GComponent, { list: fairygui.GList }, string, string>;
      type ServerInfoRender = __UIComponent<fairygui.GComponent, { info: fairygui.GTextField }, string, string>;
      type TxtLog = __UIComponent<fairygui.GComponent, { txt: fairygui.GTextField }, string, string>;
    }
  }
  namespace Discount {
    type DiscountWindow = __UIComponent<
      fairygui.GComponent,
      {
        imgDesc: fairygui.GLoader;
        tabList: fairygui.GList;
        freeList: fairygui.GList;
        txtCharge: fairygui.GTextField;
        buyList: fairygui.GList;
        txtFree: fairygui.GTextField;
        txtNeed: fairygui.GTextField;
        close: UILibFrame.Components.ButtonCloseBiz;
        txtBuy: fairygui.GTextField;
        btnFree: UILib.Components.button.Button11;
        btnBuy: UILib.Components.button.Button11;
        txtTime: fairygui.GTextField;
        imgTitle: fairygui.GLoader;
      },
      string,
      string
    >;
    type DiscountRender = __UIComponent<
      fairygui.GButton,
      { title: fairygui.GTextField; redPoint: fairygui.GImage },
      "button",
      string
    >;
  }
  namespace Divinity {
    type DivinityWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        imgBg: fairygui.GLoader;
        roleRender2: Divinity.Components.DivinityRoleRender;
        roleRender1: Divinity.Components.DivinityRoleRender;
        roleRender0: Divinity.Components.DivinityRoleRender;
        roleRenders: fairygui.GGroup;
        attrList: fairygui.GList;
        skillDesc: fairygui.GTextField;
        titleLoader: fairygui.GLoader;
        btnUpgrade: UILib.Components.button.Button11;
        btnSwb: Divinity.Components.SwbButton;
        tails: fairygui.GImage;
        skillIcon: fairygui.GLoader;
        expPro: Divinity.Components.ProgressBar1;
      },
      string,
      string
    >;
    namespace Components {
      type DivinityRoleRender = __UIComponent<
        fairygui.GButton,
        {
          txtDmage: fairygui.GTextField;
          titleLoader: fairygui.GLoader;
          txtName: fairygui.GTextField;
          roleGraph: fairygui.GGraph;
          noneLoader: fairygui.GLoader;
        },
        "button" | "modCon",
        string
      >;
      type ProgressBar1 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type SwbButton = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace DrillingArtifact {
    type DrillingArtifactWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILib.Components.button.ButtonClose1;
        specialItem: fairygui.GLoader;
        rankLoader: fairygui.GLoader;
        mod: fairygui.GGraph;
        txtRank: fairygui.GTextField;
        attrList: fairygui.GList;
        txtHsVal: fairygui.GTextField;
        rewardList: fairygui.GList;
        btnGet: UILib.Components.button.Button11;
        taskList: fairygui.GList;
        txtSpecialUse: fairygui.GTextField;
        ywcLoader: fairygui.GLoader;
      },
      "conMax" | "conGet",
      string
    >;
    type DrillingArtifactAttrRender = __UIComponent<
      fairygui.GComponent,
      { txtName: fairygui.GTextField; txtValue: fairygui.GTextField },
      string,
      string
    >;
    type DrillingArtifactTaskRender = __UIComponent<
      fairygui.GComponent,
      { txtContent: fairygui.GTextField; ywcLoader: fairygui.GLoader; btnGo: DrillingArtifact.GoBtn },
      string,
      string
    >;
    type GoBtn = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
  }
  namespace EarnEver {
    type EarnEverWindow = __UIComponent<
      fairygui.GComponent,
      {
        imgRbg: fairygui.GLoader;
        list: fairygui.GList;
        bar: EarnEver.Component.ProgressMoney;
        listCharge: fairygui.GList;
        btnHelp: EarnEver.Component.Button1;
        close: UILibFrame.Components.ButtonCloseBiz;
        item: UILib.Components.render.RewardRender2;
        txtIntro: fairygui.GTextField;
        txtName: fairygui.GTextField;
        btnGet: UILib.Components.button.Button11;
        group: fairygui.GGroup;
        imgAllGet: fairygui.GLoader;
      },
      string,
      string
    >;
    type EarnEverInsWindow = __UIComponent<
      fairygui.GComponent,
      { bg: fairygui.GImage; txtCharge: fairygui.GTextField; list: fairygui.GList },
      string,
      string
    >;
    type EarnEverQuitWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnPlay: UILib.Components.button.Button2_Orange;
        btnQuit: UILib.Components.button.Button2_Red;
        listAward: fairygui.GList;
        close: UILibFrame.Components.ButtonClose;
      },
      string,
      string
    >;
    namespace Component {
      type EarnEverRender = __UIComponent<
        fairygui.GComponent,
        { txtMoney: fairygui.GTextField; imgItem: fairygui.GLoader },
        string,
        string
      >;
      type EarnEverInsRender = __UIComponent<
        fairygui.GComponent,
        { listAward: fairygui.GList; txtWelfare: fairygui.GTextField; txtMoney: fairygui.GTextField },
        string,
        string
      >;
      type comBar = __UIComponent<fairygui.GComponent, {}, string, string>;
      type ProgressMoney = __UIComponent<fairygui.GProgressBar, { bar_v: EarnEver.Component.comBar }, string, string>;
      type EarnEverMoneyRender = __UIComponent<fairygui.GComponent, { txtMoney: fairygui.GTextField }, string, string>;
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace Equip {
    type EquipWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        relation: UILibFrame.Components.WindowRelationList;
      },
      string,
      string
    >;
    type EquipDescWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrameTwo; txtDesc: fairygui.GTextField; name: fairygui.GTextField },
      string,
      string
    >;
    type EquipWishWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtName: fairygui.GTextField;
        attrList: fairygui.GList;
        txtDesc: fairygui.GTextField;
        txtActivate: fairygui.GTextField;
        txtGetDesc: fairygui.GTextField;
      },
      "conType" | "conState",
      "t0"
    >;
    namespace strengthen {
      type EquipStrengthenWindow = __UIComponent<
        fairygui.GComponent,
        {
          listEquip: fairygui.GList;
          txtName: fairygui.GTextField;
          curAttrList: fairygui.GList;
          nextAttrList: fairygui.GList;
          needItem: UILib.Components.render.ItemCFGRender;
          txtCostNum: fairygui.GTextField;
          txtEquipStrLv: fairygui.GTextField;
          txtRate: fairygui.GTextField;
          btnAdd: Equip.strengthen.btnAdd;
          specialItem: UILib.Components.render.ItemCFGRender;
          txtSpecialConst: fairygui.GTextField;
          selectRender: Equip.strengthen.EquipStrRender;
          btnSuit: Equip.strengthen.btnSuit;
          txtStrLv: fairygui.GTextField;
          btnLimit: Equip.Components.btnLimit;
          btnDesc: UILib.Components.button.ButtonHelp;
          btn_1: RoleAttr.Components.roleEquipTab;
          btn_2: RoleAttr.Components.roleEquipTab;
          btn_3: RoleAttr.Components.roleEquipTab;
          btn_4: RoleAttr.Components.roleEquipTab;
          btn_5: RoleAttr.Components.roleEquipTab;
          btnWish: Equip.Components.btnWish;
          succMod: fairygui.GGraph;
          btnStr: UILib.Components.button.Button11;
        },
        "conEquip" | "conAdd",
        string
      >;
      type EquipStrRender = __UIComponent<
        fairygui.GButton,
        {
          equip: UILib.Components.render.EquipRender;
          imgJia: fairygui.GImage;
          strLv: fairygui.GTextField;
          boxLv: fairygui.GGroup;
          iconSel: fairygui.GImage;
          imgUp: fairygui.GImage;
        },
        "button",
        string
      >;
      type btnAdd = __UIComponent<fairygui.GButton, { imgJia: fairygui.GImage }, "button", string>;
      type btnSuit = __UIComponent<fairygui.GButton, {}, "button", string>;
      type EquipStrItemWindow = __UIComponent<
        fairygui.GComponent,
        { contentArea: UILibFrame.Components.comFrameTwo; name: fairygui.GTextField; list: fairygui.GList },
        string,
        string
      >;
      type EquipStrItemRender = __UIComponent<
        fairygui.GComponent,
        {
          item: UILib.Components.render.ItemCFGRender;
          txtNum: fairygui.GTextField;
          txtName: fairygui.GTextField;
          txtDesc: fairygui.GTextField;
          imgCheck: fairygui.GImage;
        },
        string,
        string
      >;
      type EquipStrSuitWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameTwo;
          name: fairygui.GTextField;
          title: fairygui.GTextField;
          suitList: fairygui.GList;
        },
        string,
        string
      >;
      type EquipStrSuitRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtAttr: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace gem {
      type EquipGemWindow = __UIComponent<
        fairygui.GComponent,
        {
          listEquip: fairygui.GList;
          txtName: fairygui.GTextField;
          allAttrList: fairygui.GList;
          attrList: fairygui.GList;
          txtGemLv: fairygui.GTextField;
          btnLimit: Equip.Components.btnLimit;
          btnDesc: UILib.Components.button.ButtonHelp;
          btn_1: RoleAttr.Components.roleEquipTab;
          btn_2: RoleAttr.Components.roleEquipTab;
          btn_3: RoleAttr.Components.roleEquipTab;
          btn_4: RoleAttr.Components.roleEquipTab;
          btn_5: RoleAttr.Components.roleEquipTab;
          costList: fairygui.GList;
          gemList: fairygui.GList;
          btnWish: Equip.Components.btnWish;
          succMod: fairygui.GGraph;
          btnGem: UILib.Components.button.Button11;
        },
        "conEquip" | "conAdd",
        string
      >;
      type EquipGemItemRender = __UIComponent<
        fairygui.GButton,
        {
          equip: UILib.Components.render.EquipRender;
          iconSel: fairygui.GImage;
          txtLv: fairygui.GTextField;
          imgUp: fairygui.GImage;
        },
        "button",
        string
      >;
      type EquipGemRender = __UIComponent<
        fairygui.GButton,
        { imgGem: fairygui.GLoader; txtName: fairygui.GTextField; imgUp: fairygui.GImage; imgLock: fairygui.GImage },
        "button" | "conGem",
        string
      >;
    }
    namespace refine {
      type EquipRefineWindow = __UIComponent<
        fairygui.GComponent,
        {
          listEquip: fairygui.GList;
          txtMaxRefLv: fairygui.GTextField;
          btnLimit: Equip.Components.btnLimit;
          btnDesc: UILib.Components.button.ButtonHelp;
          btn_1: RoleAttr.Components.roleEquipTab;
          btn_2: RoleAttr.Components.roleEquipTab;
          btn_3: RoleAttr.Components.roleEquipTab;
          btn_4: RoleAttr.Components.roleEquipTab;
          btn_5: RoleAttr.Components.roleEquipTab;
          starList: fairygui.GList;
          txtName: fairygui.GTextField;
          curAttrList: fairygui.GList;
          nextAttrList: fairygui.GList;
          txtRefineLv: fairygui.GTextField;
          costList: fairygui.GList;
          selectRender: Equip.refine.EquipRefineRender;
          btnWish: Equip.Components.btnWish;
          succMod: fairygui.GGraph;
          btnRefine: UILib.Components.button.Button11;
        },
        "conEquip" | "conAdd",
        string
      >;
      type EquipRefineRender = __UIComponent<
        fairygui.GButton,
        {
          equip: UILib.Components.render.EquipRender;
          iconRank: fairygui.GLoader;
          iconSel: fairygui.GImage;
          imgUp: fairygui.GImage;
        },
        "button",
        string
      >;
    }
    namespace awaken {
      type EquipAwakenWindow = __UIComponent<
        fairygui.GComponent,
        {
          listEquip: fairygui.GList;
          txtAwakenMaxLv: fairygui.GTextField;
          btnLimit: Equip.Components.btnLimit;
          btnDesc: UILib.Components.button.ButtonHelp;
          btn_1: RoleAttr.Components.roleEquipTab;
          btn_2: RoleAttr.Components.roleEquipTab;
          btn_3: RoleAttr.Components.roleEquipTab;
          btn_4: RoleAttr.Components.roleEquipTab;
          btn_5: RoleAttr.Components.roleEquipTab;
          item0: Equip.awaken.EquipAwakenItemRender;
          item1: Equip.awaken.EquipAwakenItemRender;
          item2: Equip.awaken.EquipAwakenItemRender;
          itemBox: fairygui.GGroup;
          txtName: fairygui.GTextField;
          curAttrList: fairygui.GList;
          nextAttrList: fairygui.GList;
          txtAwakenLv: fairygui.GTextField;
          imgYellowBg: fairygui.GImage;
          selectRender: Equip.awaken.EquipAwakenRender;
          succMod: fairygui.GGraph;
          btnAwaken: UILib.Components.button.Button11;
        },
        "conEquip" | "conAdd",
        string
      >;
      type EquipAwakenItemRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.ItemCFGRender; txtCount: fairygui.GTextField; imgLock: fairygui.GImage },
        string,
        string
      >;
      type EquipAwakenRender = __UIComponent<
        fairygui.GButton,
        {
          equip: UILib.Components.render.EquipRender;
          iconRank: fairygui.GLoader;
          iconSel: fairygui.GImage;
          imgUp: fairygui.GImage;
        },
        "button",
        string
      >;
    }
    namespace Components {
      type EquipAttrRender = __UIComponent<
        fairygui.GComponent,
        { attrName: fairygui.GTextField; attrValue: fairygui.GTextField },
        string,
        string
      >;
      type btnLimit = __UIComponent<fairygui.GButton, {}, "button", string>;
      type EquipCostItemRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.ItemCFGRender; num: fairygui.GTextField },
        string,
        string
      >;
      type btnWish = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type WishAttrRender = __UIComponent<
        fairygui.GComponent,
        { attrName: fairygui.GTextField; attrValue: fairygui.GTextField },
        string,
        string
      >;
    }
  }
  namespace EquipRecycle {
    type EquipRecycleWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILib.Components.button.ButtonClose1;
        btnRefresh: UILib.Components.button.Button2_Orange;
        btnAccept: UILib.Components.button.Button2_Orange;
        txtRefresh: fairygui.GTextField;
        btnComplete: UILib.Components.button.Button2_Orange;
        txtComplete: fairygui.GTextField;
        btnGo: UILib.Components.button.Button2_Orange;
        txtCount: fairygui.GTextField;
        itemList: fairygui.GList;
        rewardList: fairygui.GList;
        btnGet: UILib.Components.button.Button2_Orange;
        btnDouble: UILib.Components.button.Button2_Orange;
        txtDouble: fairygui.GTextField;
        extraList: fairygui.GList;
        btnPrivilege: EquipRecycle.render.Button1;
      },
      "conState" | "conComplete",
      string
    >;
    namespace render {
      type NeedItemRender = __UIComponent<
        fairygui.GButton,
        { item: UILib.Components.render.RewardRender2; txtCount: fairygui.GTextField },
        string,
        string
      >;
      type RecycleRewardRender = __UIComponent<
        fairygui.GButton,
        { reward: UILib.Components.render.RewardRender2; imgMark: fairygui.GLoader },
        string,
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
  }
  namespace Escort {
    type EscortWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        listEscort: fairygui.GList;
        btnAutoCheck: UILib.Components.button.CheckBox1;
        btnBuyCheck: UILib.Components.button.CheckBox1;
        txtDesc: fairygui.GTextField;
        btnRefresh: UILib.Components.button.Button2_Orange;
        btnEnter: UILib.Components.button.Button2_Orange;
        btnComBox: UILib.Components.combobox.ComboBox2;
        txtItemCount: fairygui.GTextField;
        txtFreeTimes: fairygui.GTextField;
        txtLastCount: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace components {
      type EscortRender = __UIComponent<
        fairygui.GComponent,
        {
          loaderAvatar: fairygui.GLoader;
          loaderName: fairygui.GLoader;
          loaderSel: fairygui.GImage;
          listItem: fairygui.GList;
        },
        string,
        string
      >;
    }
  }
  namespace EscortEnd {
    type EscortEndWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comTipsBg;
        btnGet: UILib.Components.button.Button2_Orange;
        listItem: fairygui.GList;
        txtDesc: fairygui.GTextField;
      },
      string,
      string
    >;
  }
  namespace EveryWeek {
    type EveryWeekWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtTimes: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        list: fairygui.GList;
        txtCharge: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Component {
      type EveryWeekRender = __UIComponent<
        fairygui.GComponent,
        {
          list: fairygui.GList;
          txtMoney: fairygui.GTextField;
          imgGet: fairygui.GLoader;
          btnGet: UILib.Components.button.Button11;
          red: fairygui.GImage;
        },
        string,
        string
      >;
    }
  }
  namespace Face {}
  namespace Fight {
    namespace RoleInfo {
      type FightUnitRoleHeadView = __UIComponent<
        fairygui.GComponent,
        { graphHPBg: fairygui.GImage; graphHP: fairygui.GImage },
        string,
        string
      >;
      type PersonRoleHeadView = __UIComponent<
        fairygui.GComponent,
        { bg_hp: fairygui.GImage; graphHP: fairygui.GLoader },
        "hpCtrl",
        string
      >;
      type PetRoleHeadView = __UIComponent<
        fairygui.GComponent,
        { graphHPBg: fairygui.GImage; graphHP: fairygui.GImage },
        string,
        string
      >;
    }
    namespace Damage {
      type BeMinusDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type NormalMinusDamageView = __UIComponent<
        fairygui.GComponent,
        { txtValue: fairygui.GTextField },
        string,
        string
      >;
      type NormalAddDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type QiegeDadlDamageView = __UIComponent<
        fairygui.GComponent,
        { txtValue: fairygui.GTextField; imgQie: fairygui.GImage },
        string,
        "ani"
      >;
      type CritMinusDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, "ani">;
      type MissDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type YazhiDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type MabiDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, "ani">;
      type MethysisDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type ZhanJiDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type DodgeDamageView = __UIComponent<fairygui.GComponent, { dodgeImg: fairygui.GImage }, string, string>;
      type SuperQiegeDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type ZhanLingDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type LingYouDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type PoLingDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type ThumpDamageView = __UIComponent<
        fairygui.GComponent,
        { thumpIcon: fairygui.GLoader; txtValue: fairygui.GTextField },
        string,
        "ani"
      >;
      type ZhongJiDamageView = __UIComponent<
        fairygui.GComponent,
        { jueji: fairygui.GLoader; txtValue: fairygui.GTextField },
        string,
        "ani"
      >;
      type PoTianNuZhanDamageView = __UIComponent<
        fairygui.GComponent,
        { nuZhan: fairygui.GLoader; txtValue: fairygui.GTextField },
        string,
        "ani"
      >;
      type HuanLingDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type PoMoDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type ZhuoShaoDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type ZhsDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type HuanYingDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type HuanLingCritDamageView = __UIComponent<
        fairygui.GComponent,
        { txtValue: fairygui.GTextField },
        string,
        string
      >;
      type HanBingDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type LieYanDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type GuDuDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type LeiDianDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type XueFanDamageSubView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type XueFanDamageAddView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type PoDunDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, string>;
      type BeigongDadlDamageView = __UIComponent<
        fairygui.GComponent,
        { txtValue: fairygui.GTextField; imgBei: fairygui.GImage },
        string,
        "ani"
      >;
      type SlaveDamageView = __UIComponent<
        fairygui.GComponent,
        { txtValue: fairygui.GTextField; imgSlave: fairygui.GImage },
        string,
        "ani"
      >;
      type LuckyDamageView = __UIComponent<fairygui.GComponent, { txtValue: fairygui.GTextField }, string, "ani">;
    }
    namespace ChatInfo {
      type ChatInfo = __UIComponent<fairygui.GComponent, { comBubble: Fight.ChatInfo.comChat }, string, string>;
      type comChat = __UIComponent<
        fairygui.GComponent,
        {
          iconDown: fairygui.GImage;
          iconBgUp: fairygui.GImage;
          txtContent: fairygui.GTextField;
          txtFace: fairygui.GRichTextField;
        },
        "direction",
        string
      >;
      type PetsChatInfo = __UIComponent<fairygui.GComponent, { bubbleView: Fight.ChatInfo.comChat1 }, string, string>;
      type comChat1 = __UIComponent<
        fairygui.GComponent,
        { iconBgUp: fairygui.GImage; petsIcon: fairygui.GLoader; txtContent: fairygui.GTextField },
        "isBagFull" | "isPets",
        string
      >;
    }
    namespace Ground {
      type RoleArrow = __UIComponent<
        fairygui.GComponent,
        { range: fairygui.GGraph; arrow: fairygui.GImage; button: fairygui.GImage },
        string,
        string
      >;
    }
    namespace Components.Joystick {
      type BtnJoy = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
    }
  }
  namespace FirstCharge {
    type FirstChargeWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtPrice: fairygui.GTextField;
        txtBuff2: fairygui.GTextField;
        btnGet: FirstCharge.Component.Button1;
        roleInViewL: UILib.Components.roleInView.RoleInView;
        roleInViewRR: UILib.Components.roleInView.RoleInView;
        roleInViewR: UILib.Components.roleInView.RoleInView;
        list: fairygui.GList;
        btnClose: FirstCharge.Component.ButtonClose;
      },
      string,
      string
    >;
    type FirstChargeFWindow = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        btnGet: FirstCharge.Component.Button2;
        roleInViewL: UILib.Components.roleInView.RoleInView;
        roleInViewR: UILib.Components.roleInView.RoleInView;
        close: UILibFrame.Components.ButtonCloseBiz;
      },
      string,
      string
    >;
    type NewRechargeWindow = __UIComponent<
      fairygui.GComponent,
      {
        imgTxt: fairygui.GLoader;
        listTab: fairygui.GList;
        list: fairygui.GList;
        roleInViewL: UILib.Components.roleInView.RoleInView;
        roleInViewR: UILib.Components.roleInView.RoleInView;
        btnGet: FirstCharge.Component.Button1;
        btnCharge: FirstCharge.Component.Button3;
        imgGet: fairygui.GImage;
        close: UILibFrame.Components.ButtonCloseBiz;
        txtCharge: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Component {
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonClose = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button3 = __UIComponent<fairygui.GButton, {}, string, string>;
      type FirstChargeTabRender = __UIComponent<
        fairygui.GButton,
        { txtDay: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
    }
  }
  namespace FirstLogin {
    type FirstLoginWindow = __UIComponent<
      fairygui.GComponent,
      { funcButton: FirstLogin.Compontens.Button1; itemIcon: fairygui.GGraph },
      string,
      string
    >;
    namespace Compontens {
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace FreeFashion {
    type FreeFashionWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrameActivity; txtTimes: fairygui.GTextField; list: fairygui.GList },
      string,
      string
    >;
    namespace Component {
      type FreeFashionRender = __UIComponent<
        fairygui.GComponent,
        {
          avatar: fairygui.GGraph;
          txtCD: fairygui.GTextField;
          groupCD: fairygui.GGroup;
          loaderCouponState: fairygui.GLoader;
          loaderCashCoupon: fairygui.GLoader;
          lblZuanshi: fairygui.GTextField;
          groupFree: fairygui.GGroup;
          lblCouponDesc: fairygui.GTextField;
          loaderMoney: fairygui.GLoader;
          btnBuy: UILib.Components.button.Button15;
          loaderSuit: fairygui.GLoader;
        },
        "stageCtrl" | "couponCtrl" | "couponStateCtrl",
        string
      >;
    }
  }
  namespace FreeMall {
    type FreeMallWindow = __UIComponent<
      fairygui.GComponent,
      {
        item1: FreeMall.Component.FreeMallRender;
        item2: FreeMall.Component.FreeMallRender;
        item3: FreeMall.Component.FreeMallRender;
        item4: FreeMall.Component.FreeMallRender;
        item5: FreeMall.Component.FreeMallRender;
        tips: FreeMall.Component.FreeMallTips;
        txtTimes: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Component {
      type FreeMallRender = __UIComponent<
        fairygui.GComponent,
        {
          txtLimit: fairygui.GTextField;
          txtName: fairygui.GTextField;
          itemIcon: fairygui.GLoader;
          btnBuy: UILib.Components.button.Button14_1;
          txtCount: fairygui.GTextField;
        },
        string,
        string
      >;
      type FreeMallTips = __UIComponent<
        fairygui.GComponent,
        { btnQuit: UILib.Components.button.Button2_Orange },
        string,
        string
      >;
    }
  }
  namespace Friend {
    type FriendWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnFriend: UILib.Components.tab.tab_0;
        btnBlack: UILib.Components.tab.tab_0;
        btnEnemy: UILib.Components.tab.tab_0;
        contentArea: UILibFrame.Components.comFrameTwo;
        btnAdd: UILib.Components.button.Button2_Orange;
        friendList: fairygui.GList;
        img_empty: fairygui.GImage;
        friendCountTxt: fairygui.GTextField;
        enemyCountTxt: fairygui.GTextField;
        blackCountTxt: fairygui.GTextField;
      },
      "tab",
      string
    >;
    type FriendAddWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        btnSure: UILib.Components.button.Button2_Orange;
        txtName: fairygui.GTextField;
        recommendList: fairygui.GList;
        btnSearch: UILib.Components.button.ButtonSearch;
      },
      string,
      string
    >;
    type FriendTraceWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        bgMap: fairygui.GLoader;
        txtPosition: fairygui.GTextField;
        txtMapName: fairygui.GTextField;
        txtName: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type FriendRender = __UIComponent<
        fairygui.GButton,
        {
          headIcon: fairygui.GLoader;
          title: fairygui.GTextField;
          txtLevel: fairygui.GTextField;
          txtPower: fairygui.GTextField;
        },
        "button",
        string
      >;
      type Button1 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; titleS: fairygui.GTextField },
        "button",
        string
      >;
      type FriendAddRender = __UIComponent<
        fairygui.GComponent,
        {
          headIcon: fairygui.GLoader;
          title: fairygui.GTextField;
          btnAdd: UILib.Components.button.ButtonAdd2;
          txtLevel: fairygui.GTextField;
        },
        string,
        string
      >;
    }
  }
  namespace FuncPreview {
    type FuncPreviewWindow = __UIComponent<
      fairygui.GComponent,
      {
        curIcon: fairygui.GLoader;
        txtDes: fairygui.GTextField;
        txtOpenDes: fairygui.GTextField;
        titleLoader: fairygui.GLoader;
        close: UILib.Components.button.ButtonClose1;
      },
      string,
      string
    >;
  }
  namespace FuncTip {
    type FuncOpenTipWindow = __UIComponent<
      fairygui.GComponent,
      {
        skillIcon: fairygui.GLoader;
        funcIcon: fairygui.GLoader;
        funcTitle: fairygui.GLoader;
        graph: fairygui.GGraph;
        skillTitle: fairygui.GTextField;
      },
      "typeCtrl",
      string
    >;
  }
  namespace Gang {
    type GangListWindow = __UIComponent<
      fairygui.GComponent,
      {
        gangList: fairygui.GList;
        bg: fairygui.GImage;
        gangRank: fairygui.GTextField;
        gangName: fairygui.GTextField;
        gangMaster: fairygui.GTextField;
        gangLevel: fairygui.GTextField;
        memberCount: fairygui.GTextField;
      },
      string,
      string
    >;
    type GangWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        relation: Gang.Components.WinRelationList;
      },
      string,
      string
    >;
    type GangInfoWindow = __UIComponent<
      fairygui.GComponent,
      {
        changeNoticeBtn: Gang.Components.changeNoticeBtn;
        noticeCom: Gang.Components.GangNoticeCom;
        gangNameS: fairygui.GTextField;
        memberCount: fairygui.GTextField;
        gangLevel: fairygui.GTextField;
        gangMoney: fairygui.GTextField;
        myPosition: fairygui.GTextField;
        gangUpMoney: fairygui.GTextField;
        contributionCount: fairygui.GTextField;
        gangUpBtn: UILib.Components.button.Button2_Orange;
        helpBtn: UILib.Components.button.ButtonHelp;
        contriBtn: Gang.Components.contriBtn;
        skillBtn: Gang.Components.contriBtn;
        mallBtn: Gang.Components.contriBtn;
        redBagBtn: Gang.Components.contriBtn;
        attrList: fairygui.GList;
        recruitBtn: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
    type GangCreateWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        gangName: fairygui.GTextField;
        gangCost: fairygui.GTextField;
        createBtn: UILib.Components.button.Button2_Orange;
        autoAgreeTxt: fairygui.GTextField;
        autoAgreeBtn: UILib.Components.button.CheckBox2;
      },
      string,
      string
    >;
    type GangNoticeChangeWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        finishBtn: UILib.Components.button.Button2_Orange;
        inputNotice: fairygui.GTextField;
        leftNum: fairygui.GTextField;
      },
      string,
      string
    >;
    type GangMembersWindow = __UIComponent<
      fairygui.GComponent,
      {
        memberList: fairygui.GList;
        onLineCheckBtn: UILib.Components.button.CheckBox1;
        memberCount: fairygui.GTextField;
        okKick: UILib.Components.button.Button2_Orange;
        batchKick: UILib.Components.button.Button2_Red;
        chatBtn: UILib.Components.button.Button2_Orange;
        applyBtn: UILib.Components.button.Button2_Orange;
        quitBtn: UILib.Components.button.Button2_Blue;
      },
      string,
      string
    >;
    type GangLogInfoWindow = __UIComponent<fairygui.GComponent, { logs: fairygui.GList }, string, string>;
    type GangRecommendWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        imageBG: fairygui.GLoader;
        btnCreate: UILib.Components.button.Button6;
        recommendList: fairygui.GList;
        btnSQ: UILib.Components.button.Button2_Blue;
        btnCJ: UILib.Components.button.Button2_Orange;
      },
      "c1",
      string
    >;
    type GangQuitWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        quitTxt: fairygui.GTextField;
        confirmBtn: UILib.Components.button.Button2_Blue;
      },
      string,
      string
    >;
    type GangRedWindow = __UIComponent<
      fairygui.GComponent,
      {
        redList: fairygui.GList;
        btnSend: UILib.Components.button.Button2_Orange;
        txtRobCount: fairygui.GTextField;
        txtRobMoney: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type GangListRender = __UIComponent<
        fairygui.GButton,
        {
          bg: fairygui.GImage;
          gangRank: fairygui.GTextField;
          gangName: fairygui.GTextField;
          gangMaster: fairygui.GTextField;
          gangLevel: fairygui.GTextField;
          memberCount: fairygui.GTextField;
        },
        string,
        string
      >;
      type contriBtn = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; red: fairygui.GImage },
        "button",
        string
      >;
      type changeNoticeBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type GangLogRender = __UIComponent<fairygui.GButton, { info: fairygui.GRichTextField }, string, string>;
      type GangNoticeCom = __UIComponent<fairygui.GComponent, { noticeText: fairygui.GTextField }, string, string>;
      type GangLogRender2 = __UIComponent<
        fairygui.GButton,
        { bg: fairygui.GImage; info: fairygui.GTextField },
        string,
        string
      >;
      type GangBossRender = __UIComponent<
        fairygui.GButton,
        {
          hpProgress: fairygui.GImage;
          nameLoader: fairygui.GLoader;
          head: fairygui.GLoader;
          stateTxt: fairygui.GTextField;
          hpProTxt: fairygui.GTextField;
        },
        "hasGangCtrl",
        string
      >;
      type RecommendRender = __UIComponent<
        fairygui.GComponent,
        {
          gangName: fairygui.GTextField;
          gangLv: fairygui.GTextField;
          roleName: fairygui.GTextField;
          joinBtn: UILib.Components.button.ButtonText;
        },
        string,
        string
      >;
      type AttrText = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button" | "showbg", string>;
      type GangMemberRender = __UIComponent<
        fairygui.GButton,
        {
          bg: fairygui.GImage;
          roleName: fairygui.GTextField;
          roleLevel: fairygui.GTextField;
          roleJob: fairygui.GTextField;
          contribute: fairygui.GTextField;
          rolePost: fairygui.GTextField;
          onLineTime: fairygui.GTextField;
        },
        "button" | "c1",
        string
      >;
      type WinRelationList = __UIComponent<fairygui.GComponent, { listBtn: fairygui.GList }, string, string>;
      type GangRedRender = __UIComponent<
        fairygui.GComponent,
        {
          closeBg: fairygui.GLoader;
          btnOpen: Gang.Components.GangRedOpenBtn;
          closeSendName: fairygui.GTextField;
          closeGroup: fairygui.GGroup;
          openBg: fairygui.GLoader;
          headIcon: fairygui.GLoader;
          openSendName: fairygui.GTextField;
          openGetMoney: fairygui.GTextField;
          btnCheckDetail: Gang.Components.GangRedCDetailBtn;
          openGetMoneyDesc: fairygui.GTextField;
          openGetMoneyNone: fairygui.GTextField;
          openGetMoneyIcon: fairygui.GImage;
          openGroup: fairygui.GGroup;
        },
        "c1",
        string
      >;
      type GangRedOpenBtn = __UIComponent<fairygui.GButton, { mod: fairygui.GGraph }, "button", string>;
      type GangRedCDetailBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace GangApply {
    type GangApplyWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        applyList: fairygui.GList;
        createBtn: UILib.Components.button.Button2_Orange;
        time: fairygui.GTextField;
        applayQuickBtn: UILib.Components.button.Button2_Blue;
      },
      string,
      string
    >;
    type GangApplyRender = __UIComponent<
      fairygui.GComponent,
      {
        bg: fairygui.GImage;
        gangName: fairygui.GTextField;
        gangMaster: fairygui.GTextField;
        gangLevel: fairygui.GTextField;
        memberCount: fairygui.GTextField;
        canceljoinBtn: UILib.Components.button.ButtonText;
        gangRank: fairygui.GTextField;
        joinBtn: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
  }
  namespace GangApplyList {
    type GangApplyListWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        gangEntryList: fairygui.GList;
        onekeyTg: UILib.Components.button.Button2_Orange;
        qXuanBtn: UILib.Components.button.CheckBox2;
        autoAudit: UILib.Components.button.CheckBox2;
        changeBtn: UILib.Components.button.Button2_Orange;
        inputPower: fairygui.GTextField;
        onekeyJj: UILib.Components.button.Button2_Blue;
      },
      string,
      string
    >;
    type GangApplyListRender = __UIComponent<
      fairygui.GComponent,
      {
        bg: fairygui.GImage;
        qXBtn: UILib.Components.button.CheckBox2;
        playerName: fairygui.GTextField;
        jobName: fairygui.GTextField;
        playerLevel: fairygui.GTextField;
        powerTxt: fairygui.GTextField;
        jJBtn: UILib.Components.button.Button13;
        tYBtn: UILib.Components.button.Button12;
      },
      string,
      string
    >;
  }
  namespace GangContribution {
    namespace Components {
      type GangContriAwardRender = __UIComponent<
        fairygui.GComponent,
        {
          contributionCout: fairygui.GTextField;
          openBtn: GangContribution.Components.GangContriBoxORender;
          closeBtn: GangContribution.Components.GangContriBoxCRender;
          red: fairygui.GImage;
        },
        string,
        string
      >;
      type GangContriBoxCRender = __UIComponent<fairygui.GButton, {}, "button", string>;
      type GangContriBoxORender = __UIComponent<fairygui.GButton, {}, "button", string>;
      type GangContributionRender = __UIComponent<
        fairygui.GComponent,
        {
          bgLoader: fairygui.GLoader;
          contributionItem: UILib.Components.render.ItemCFGRender;
          myContributionTxt: fairygui.GTextField;
          myMoneyTxt: fairygui.GTextField;
          titleLoader: fairygui.GLoader;
          iconLoader: fairygui.GLoader;
          contributionBtn: GangContribution.Components.Button1;
          txtContribution: fairygui.GTextField;
        },
        string,
        string
      >;
      type GangContriProRender = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
    type GangContributionWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        awardPro: GangContribution.Components.GangContriProRender;
        awardList: fairygui.GList;
        contributionList: fairygui.GList;
      },
      string,
      string
    >;
  }
  namespace GangMall {
    type GangMallWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrame; list: fairygui.GList; txtContirbution: fairygui.GTextField },
      string,
      string
    >;
    type GangMallRender = __UIComponent<
      fairygui.GButton,
      {
        item: UILib.Components.render.ItemCFGRender;
        itemName: fairygui.GTextField;
        txtCount: fairygui.GTextField;
        txtLimit: fairygui.GTextField;
        btnBuy: UILib.Components.button.Button6;
      },
      "button" | "sellCon",
      string
    >;
  }
  namespace GangRed {
    type GangSendRedWindow = __UIComponent<
      fairygui.GComponent,
      {
        systemBg: fairygui.GLoader;
        customBg: fairygui.GLoader;
        txtMoneyTotal: fairygui.GTextField;
        txtCountTotal: fairygui.GTextField;
        btnMoneyAdd: UILib.Components.button.ButtonAdd4;
        btnMoneyMinus: UILib.Components.button.ButtonMinus2;
        btnCountAdd: UILib.Components.button.ButtonAdd4;
        btnCountMinus: UILib.Components.button.ButtonMinus2;
        customGroup: fairygui.GGroup;
        systemList: fairygui.GList;
        imgNone: fairygui.GImage;
        systemGroup: fairygui.GGroup;
        customBtn: UILib.Components.button.CheckBox2;
        systemBtn: UILib.Components.button.CheckBox2;
        txtDesc: fairygui.GTextField;
        btnSend: GangRed.Components.GangSendRedBtn;
      },
      "con",
      string
    >;
    type GangDetailRedWindow = __UIComponent<
      fairygui.GComponent,
      {
        systemBg: fairygui.GLoader;
        headIcon: fairygui.GLoader;
        sendName: fairygui.GTextField;
        getMoney: fairygui.GTextField;
        detailList: fairygui.GList;
        openGetMoneyDesc: fairygui.GTextField;
        openGetMoneyNone: fairygui.GTextField;
        totalMoney: fairygui.GTextField;
        totalCount: fairygui.GTextField;
        openGetMoneyIcon: fairygui.GImage;
      },
      string,
      string
    >;
    namespace Components {
      type GangSendRedRender = __UIComponent<
        fairygui.GButton,
        { redBg: fairygui.GLoader; txtMoney: fairygui.GTextField },
        "button",
        string
      >;
      type GangSendRedBtn = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type GangDeatailRedRender = __UIComponent<
        fairygui.GComponent,
        { getName: fairygui.GTextField; getMoney: fairygui.GTextField; zj: fairygui.GLoader },
        string,
        string
      >;
    }
  }
  namespace GangSkill {
    type GangSkillWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        skillList: fairygui.GList;
        skillIcon: fairygui.GLoader;
        skillName: fairygui.GTextField;
        skillLv: fairygui.GTextField;
        btnUpgrade: UILib.Components.button.Button11;
        curSkillCon: fairygui.GTextField;
        nextSkillCon: fairygui.GTextField;
        txtNeedLv: fairygui.GTextField;
        txtNeedContribution: fairygui.GTextField;
        btnUpgradeRed: fairygui.GImage;
        helpBtn: UILib.Components.button.ButtonHelp;
        txtGangLv: fairygui.GTextField;
        txtMaxLv: fairygui.GTextField;
        txtContribution: fairygui.GTextField;
      },
      "c1",
      string
    >;
    type GangSkillRender = __UIComponent<
      fairygui.GButton,
      {
        skillIcon: fairygui.GLoader;
        skillName: fairygui.GTextField;
        skillLv: fairygui.GTextField;
        red: fairygui.GImage;
      },
      "button",
      string
    >;
  }
  namespace Gather {
    type DefaultGatherWindow = __UIComponent<
      fairygui.GComponent,
      { progress: Gather.Components.ProgressBar1; leftTime: fairygui.GTextField },
      string,
      string
    >;
    namespace Components {
      type BarCom = __UIComponent<fairygui.GComponent, {}, string, string>;
      type ProgressBar1 = __UIComponent<fairygui.GProgressBar, { bar: Gather.Components.BarCom }, string, string>;
    }
  }
  namespace GetEquipTips {
    type GetEquipTipsWindow = __UIComponent<
      fairygui.GComponent,
      { equipView: GetEquipTips.GetEquipTipsView; FlyIcon: UILib.Components.render.EquipRender },
      string,
      "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "kuang_appear"
    >;
    type GetEquipTipsView = __UIComponent<fairygui.GComponent, {}, string, string>;
  }
  namespace GetMoneyWay {
    type GetMoneyWayWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        listBtn: fairygui.GList;
        btnPrOdds: fairygui.GGraph;
        btnMc: fairygui.GGraph;
        btnCharge: fairygui.GGraph;
        btnVip: fairygui.GGraph;
        group0: fairygui.GGroup;
        group1: fairygui.GGroup;
        btnBoss: fairygui.GGraph;
        listBoss: fairygui.GList;
        group2: fairygui.GGroup;
        btnWarBlade: fairygui.GGraph;
        listSkill1: fairygui.GList;
        btnLoongSoul: fairygui.GGraph;
        listSkill2: fairygui.GList;
        titleBg: fairygui.GLoader;
        titleBg1: fairygui.GLoader;
        lh: fairygui.GLoader;
        lhg: fairygui.GLoader;
        group3: fairygui.GGroup;
        listEquip: fairygui.GList;
        gruop4: fairygui.GGroup;
        titleIcon: fairygui.GLoader;
        btnGift: GetMoneyWay.Component.Button1;
      },
      "page",
      string
    >;
    namespace Component {
      type GetMoneyWayRender = __UIComponent<
        fairygui.GButton,
        { txtName: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type GetMoneyWayBossRender = __UIComponent<
        fairygui.GComponent,
        { list: fairygui.GList; bossName: fairygui.GLoader },
        string,
        string
      >;
      type GetMoneyWaySkillRender = __UIComponent<
        fairygui.GComponent,
        { bg: fairygui.GGraph; skillIcon: fairygui.GLoader; txtDesc: fairygui.GTextField },
        string,
        string
      >;
      type GetMoneyWayEquipRender = __UIComponent<
        fairygui.GComponent,
        { list: fairygui.GList; txtZhuan: fairygui.GTextField },
        string,
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, { red: fairygui.GImage }, "button", string>;
    }
  }
  namespace GiftBag {
    type GiftBagWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILib.Components.button.ButtonClose1;
        titleLoader: fairygui.GLoader;
        limitTimeList: fairygui.GList;
        txtCost: fairygui.GTextField;
        btnLimitTimeOpen: UILib.Components.button.Button11;
        optionalList: fairygui.GList;
      },
      "giftCon" | "costCon",
      string
    >;
    type GiftShowWindow = __UIComponent<
      fairygui.GComponent,
      { close: UILib.Components.button.ButtonClose1; titleLoader: fairygui.GLoader; rewardList: fairygui.GList },
      string,
      string
    >;
    namespace Components {
      type GiftBagRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.RewardRender2; btnGet: UILib.Components.button.Button14 },
        string,
        string
      >;
    }
  }
  namespace Gm {
    type GmWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        iconFrameL: fairygui.GImage;
        iconFrameR: fairygui.GImage;
        iconTextBg0: fairygui.GImage;
        iconTextBg1: fairygui.GImage;
        iconTextBg2: fairygui.GImage;
        iconTextBg3: fairygui.GImage;
        iconTextBg4: fairygui.GImage;
        listFun: fairygui.GList;
        btnCom: UILib.Components.tab.tab_1;
        btnAll: UILib.Components.tab.tab_1;
        btnFind: UILib.Components.button.Button6;
        btnSend: UILib.Components.button.Button2_Orange;
        txtTitle: fairygui.GTextField;
        txtCon: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        txtParam1Bg: fairygui.GTextField;
        txtParam2Bg: fairygui.GTextField;
        txtParam3Bg: fairygui.GTextField;
        txtParam1: fairygui.GTextField;
        txtParam2: fairygui.GTextField;
        txtParam3: fairygui.GTextField;
        txtGm: fairygui.GTextField;
      },
      "conType",
      string
    >;
    namespace components {
      type GmFunRender = __UIComponent<
        fairygui.GButton,
        { icon0: fairygui.GImage; icon1: fairygui.GImage; txtName: fairygui.GTextField },
        "button",
        string
      >;
    }
  }
  namespace GodInvestment {
    type GodInvestmentWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonCloseBiz;
        txtTime: fairygui.GTextField;
        list: fairygui.GList;
        btnR: Investment.Component.ButtonR;
        btnL: Investment.Component.ButtonL;
        btnCharge: GodInvestment.Components.btnBuy;
      },
      "conState",
      string
    >;
    namespace Components {
      type GodInvestmentRender = __UIComponent<
        fairygui.GComponent,
        {
          txtDay: fairygui.GTextField;
          item1: UILib.Components.render.RewardRender2;
          item2: UILib.Components.render.RewardRender2;
          btnGet1: GodInvestment.Components.ButtonGet;
          btnGet2: GodInvestment.Components.ButtonGet;
          imgRed1: fairygui.GImage;
          imgRed2: fairygui.GImage;
          imgLv: fairygui.GLoader;
        },
        "conState1" | "conState2",
        string
      >;
      type ButtonGet = __UIComponent<fairygui.GButton, {}, "button", string>;
      type btnBuy = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
    }
  }
  namespace Guide {
    namespace Components {
      type GuideArrowsDir = __UIComponent<
        fairygui.GComponent,
        {
          txt_right: fairygui.GTextField;
          right: fairygui.GGroup;
          txt_left: fairygui.GTextField;
          left: fairygui.GGroup;
          txt_down: fairygui.GTextField;
          down: fairygui.GGroup;
          txt_top: fairygui.GTextField;
          top: fairygui.GGroup;
        },
        "dirCtr",
        "right" | "left" | "down" | "top"
      >;
    }
  }
  namespace Halo {
    type HaloWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        commonView: Wing.ExternCommonWindow;
      },
      string,
      string
    >;
  }
  namespace HelpInfo {
    type HelpInfoWindow = __UIComponent<
      fairygui.GComponent,
      { infoCom: HelpInfo.Component1; close: HelpInfo.Button1 },
      string,
      string
    >;
    type Component1 = __UIComponent<fairygui.GComponent, { txt_info: fairygui.GTextField }, string, string>;
    type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
  }
  namespace HFMosterComing {
    type HFMosterComingWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnKill: HFMosterComing.ButtonKill;
        awardList: fairygui.GList;
        roleInView: UILib.Components.roleInView.RoleInView;
      },
      string,
      string
    >;
    type ButtonKill = __UIComponent<fairygui.GButton, {}, string, string>;
  }
  namespace HFPassport {
    type HFPassportWindow = __UIComponent<
      fairygui.GComponent,
      {
        passCom: HFPassport.Component.passCom;
        dayMissCom: HFPassport.Component.dayMissCom;
        weekMissCom: HFPassport.Component.weekMissCom;
        txtTime: fairygui.GTextField;
        txtBuyTime: fairygui.GTextField;
        btnActivityBuy: HFPassport.Component.Button2;
        btnBuy: HFPassport.Component.Button3;
        expPro: HFPassport.Component.ProgressBar;
        txtLv: fairygui.GTextField;
        tabList: fairygui.GList;
        close: UILib.Components.button.ButtonClose1;
      },
      "buyCon" | "state",
      string
    >;
    namespace Component {
      type Button2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button3 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button4 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button5 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type passCom = __UIComponent<
        fairygui.GComponent,
        {
          btnPlayDes: HFPassport.Component.Button5;
          lvList: fairygui.GList;
          rewardList: fairygui.GList;
          btnOneKeyGet: UILib.Components.button.Button11;
        },
        string,
        string
      >;
      type dayMissCom = __UIComponent<fairygui.GComponent, { misList: fairygui.GList }, string, string>;
      type ProgressBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type HFPassportRender = __UIComponent<
        fairygui.GComponent,
        {
          txtLv: fairygui.GTextField;
          normalItem: UILib.Components.render.ItemCFGRender;
          specialItem: UILib.Components.render.ItemCFGRender;
          btnNoramlGet: UILib.Components.button.Button14;
          btnSpecialGet: UILib.Components.button.Button14;
          imgNoramlYlq: fairygui.GLoader;
          imgSpecialYlq: fairygui.GLoader;
          txtNormalCount: fairygui.GTextField;
          txtSpecalCount: fairygui.GTextField;
        },
        string,
        string
      >;
      type HFMissionRender = __UIComponent<
        fairygui.GComponent,
        {
          txtCon: fairygui.GTextField;
          misPro: HFPassport.Component.ProgressBar2;
          txtCount: fairygui.GTextField;
          btnGet: UILib.Components.button.Button11;
        },
        string,
        string
      >;
      type ProgressBar2 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type weekMissCom = __UIComponent<fairygui.GComponent, { weekMisList: fairygui.GList }, string, string>;
      type HFPassportTabRender = __UIComponent<
        fairygui.GButton,
        { txt: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
    }
  }
  namespace HFWelfare {
    type HFWelfareWindow = __UIComponent<
      fairygui.GComponent,
      {
        listDay: fairygui.GList;
        btnGetAct2: UILib.Components.button.Button2_Green;
        btnGetLogin: UILib.Components.button.Button2_Orange;
        listLogin: fairygui.GList;
        listAct: fairygui.GList;
        btnGetAct: UILib.Components.button.Button2_Orange;
        txtMyScore: fairygui.GTextField;
        redLogin: fairygui.GImage;
        redAct: fairygui.GImage;
        redAct2: fairygui.GImage;
        imgGetLog: fairygui.GLoader;
        imgGetAct: fairygui.GLoader;
      },
      string,
      string
    >;
    type HFWelfareRender = __UIComponent<
      fairygui.GComponent,
      {
        bg: fairygui.GLoader;
        txtDay: fairygui.GTextField;
        item: UILib.Components.render.RewardRender2;
        txtName: fairygui.GTextField;
        imgGet: fairygui.GLoader;
      },
      string,
      string
    >;
  }
  namespace HonorToken {
    type HonorTokenWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtLv: fairygui.GTextField;
        lvList: fairygui.GList;
        txtTime: fairygui.GTextField;
        txtBuyTime: fairygui.GTextField;
        rewardList: fairygui.GList;
        btnOneKeyGet: UILib.Components.button.Button11;
        expPro: HonorToken.Component.ProgressBar1;
        btnActivityBuy: HonorToken.Component.Button2;
        btnBuy: HonorToken.Component.Button3;
        btnPlayDes: HonorToken.Component.Button5;
        close: UILib.Components.button.ButtonClose1;
        txtKillMax: fairygui.GTextField;
        btnGetScore: UILib.Components.button.Button2_Orange;
        btnBuyScore: UILib.Components.button.Button2_Orange;
      },
      "buyCon",
      string
    >;
    type HonorTokenBuyScoreWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: HonorToken.Component.Button1;
        btnBuy: UILib.Components.button.Button2_Orange;
        btnClose: UILib.Components.button.Button2_Green;
        txtInfo: fairygui.GTextField;
        txtLastTime: fairygui.GTextField;
      },
      string,
      string
    >;
    type HonorTokenGetScoreWindow = __UIComponent<
      fairygui.GComponent,
      { close: HonorToken.Component.Button1; list: fairygui.GList },
      string,
      string
    >;
    namespace Component {
      type HonorTokenRender = __UIComponent<
        fairygui.GComponent,
        {
          txtLv: fairygui.GTextField;
          normalItem: UILib.Components.render.ItemCFGRender;
          specialItem: UILib.Components.render.ItemCFGRender;
          btnNoramlGet: UILib.Components.button.Button14;
          btnSpecialGet: UILib.Components.button.Button14;
          imgNoramlYlq: fairygui.GLoader;
          imgSpecialYlq: fairygui.GLoader;
          txtNormalCount: fairygui.GTextField;
          txtSpecalCount: fairygui.GTextField;
        },
        string,
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type HonorTokenGetScoreRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; btnGo: UILib.Components.button.Button14 },
        string,
        string
      >;
      type ProgressBar1 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type Button2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button3 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button4 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button5 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace Horse {
    type HorseWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        commonView: Wing.ExternCommonWindow;
      },
      string,
      string
    >;
  }
  namespace Investment {
    type InvestmentWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonCloseBiz;
        txtBizTime: fairygui.GTextField;
        list: fairygui.GList;
        btnR: Investment.Component.ButtonR;
        btnL: Investment.Component.ButtonL;
        listTab: fairygui.GList;
        btnCharge: UILib.Components.button.Button11;
        txtPrice: fairygui.GTextField;
      },
      "page",
      string
    >;
    namespace Component {
      type ButtonGet = __UIComponent<fairygui.GButton, {}, "button", string>;
      type InvestmentRender = __UIComponent<
        fairygui.GComponent,
        {
          txtDay: fairygui.GTextField;
          btnGetAbove: Investment.Component.ButtonGet;
          txtLv: fairygui.GTextField;
          i: UILib.Components.render.RewardRender2;
          item2: UILib.Components.render.RewardRender2;
          btnGetBelow: Investment.Component.ButtonGet;
          txtDiamond: fairygui.GTextField;
          imgGetAbove: fairygui.GImage;
          imgGetBelow: fairygui.GImage;
          redAbove: fairygui.GImage;
          redBelow: fairygui.GImage;
        },
        string,
        string
      >;
      type ButtonL = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonR = __UIComponent<fairygui.GButton, {}, "button", string>;
      type InvestmentTabRender = __UIComponent<
        fairygui.GButton,
        { txt: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
    }
  }
  namespace ItemAutomaticUseTip {
    type ItemAutomaticUseTipView = __UIComponent<
      fairygui.GComponent,
      { tipView: ItemAutomaticUseTip.Components.tipview },
      string,
      string
    >;
    namespace Components {
      type tipview = __UIComponent<
        fairygui.GComponent,
        {
          close: UILibFrame.Components.ButtonTipsClose;
          equip: ItemAutomaticUseTip.Components.EquipView;
          item: ItemAutomaticUseTip.Components.ItemView;
        },
        "itemType",
        "tweenIn"
      >;
      type ItemView = __UIComponent<
        fairygui.GComponent,
        {
          ignoreCheck: UILib.Components.button.CheckBox1;
          item: UILib.Components.render.RewardRender;
          itemName: fairygui.GTextField;
          txtCount: fairygui.GTextField;
          useBtn: UILib.Components.button.Button2_Orange;
        },
        "showCheck",
        string
      >;
      type EquipView = __UIComponent<
        fairygui.GComponent,
        {
          itemRender: UILib.Components.render.RewardRender;
          useEquipBtn: UILib.Components.button.Button2_Orange;
          attrList: fairygui.GList;
        },
        string,
        string
      >;
      type AutoAttrRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtValue: fairygui.GTextField },
        string,
        string
      >;
    }
  }
  namespace ItemTips {
    type ItemTipWindow = __UIComponent<
      fairygui.GComponent,
      {
        imgQualityBg: fairygui.GLoader;
        qualityMod: fairygui.GGraph;
        listView: fairygui.GList;
        render: UILib.Components.render.ItemCFGRender;
        txtName: fairygui.GTextField;
        txtType: fairygui.GTextField;
        txtLevel: fairygui.GTextField;
        txtNum: fairygui.GTextField;
        itemMod: fairygui.GGraph;
        txtFight: fairygui.GTextField;
        boxFight: fairygui.GGroup;
      },
      string,
      string
    >;
    type AttrTipWindow = __UIComponent<
      fairygui.GComponent,
      {
        comRender: UILib.Components.render.RewardRender;
        listView: fairygui.GList;
        txtName: fairygui.GTextField;
        txtCount: fairygui.GTextField;
        close: UILib.Components.button.ButtonClose;
      },
      string,
      string
    >;
    type ItemBtnView = __UIComponent<fairygui.GComponent, { listBtn: fairygui.GList }, string, string>;
    type ItemEquipView = __UIComponent<
      fairygui.GComponent,
      {
        imgQualityBg: fairygui.GLoader;
        qualityMod: fairygui.GGraph;
        loaderEquiped: fairygui.GLoader;
        render: UILib.Components.render.ItemCFGRender;
        listView: fairygui.GList;
        txtName: fairygui.GTextField;
        txtType: fairygui.GTextField;
        txtJob: fairygui.GTextField;
        txtLevel: fairygui.GTextField;
        txtBind: fairygui.GTextField;
        txtEquipLv: fairygui.GTextField;
        equipMod: fairygui.GGraph;
      },
      string,
      string
    >;
    type EquipTipWindow = __UIComponent<
      fairygui.GComponent,
      { itemEquipView: ItemTips.ItemEquipView; btnView: ItemTips.ItemBtnView },
      string,
      string
    >;
    type EquipCompareWindow = __UIComponent<
      fairygui.GComponent,
      { leftEquip: ItemTips.ItemEquipView; rightEquip: ItemTips.ItemEquipView; btnView: ItemTips.ItemBtnView },
      "c1",
      string
    >;
    type ItemSplitWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        txtName: fairygui.GTextField;
        itemRender: UILib.Components.render.ItemCFGRender;
        btnReduce: UILib.Components.button.ButtonMinus;
        btnAdd: UILib.Components.button.ButtonAdd;
        txtCountBg: fairygui.GTextField;
        txtTotalCount: fairygui.GTextField;
        txtCount: fairygui.GTextField;
        slider: UILib.Components.slider.Slider2;
        btnSplit: UILib.Components.button.Button3_blue;
        btn_cancel: UILib.Components.button.Button3_yellow;
      },
      string,
      string
    >;
    namespace Components {
      type ItemTipAttrRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtValue: fairygui.GTextField },
        string,
        string
      >;
      type ItemTipWayRender = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ItemTipEquipSuitRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField },
        string,
        string
      >;
      type Button_More = __UIComponent<
        fairygui.GButton,
        { iconBg: fairygui.GImage; iconArrow: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type ItemTipAttrBestRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtValue: fairygui.GTextField },
        string,
        string
      >;
      type EquipTipFgAttrRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtValue: fairygui.GTextField },
        string,
        string
      >;
      type ButtonTitle = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type comText = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type comText22 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type EquipGemRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtValue: fairygui.GTextField },
        string,
        string
      >;
      type ItemStrAttrRender = __UIComponent<fairygui.GComponent, { txtStrValue: fairygui.GTextField }, string, string>;
      type EquipStarRender = __UIComponent<
        fairygui.GComponent,
        { imgStar: fairygui.GLoader },
        "conStar" | "conShow",
        string
      >;
      type ItemSkillRender = __UIComponent<
        fairygui.GComponent,
        { imgSkill: fairygui.GLoader; txtDesc: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace itemViewRender {
      type ItemTipWayView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listWay: fairygui.GList },
        string,
        string
      >;
      type ItemTipDescView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; txtDesc: fairygui.GTextField },
        string,
        string
      >;
      type ItemTipDropDescView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; txtDesc: fairygui.GTextField },
        string,
        string
      >;
      type ItemTipAttrView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listAttr: fairygui.GList; listStr: fairygui.GList },
        string,
        string
      >;
      type ItemTipAttrBestView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listAttr: fairygui.GList; txtDesc: fairygui.GTextField },
        string,
        string
      >;
      type EquipSuitZBView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; txtName: fairygui.GTextField; txtAttr: fairygui.GTextField },
        string,
        string
      >;
      type EquipSuitCAView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listSuit: fairygui.GList },
        string,
        string
      >;
      type EquipSuitSXView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listName: fairygui.GList; listSuit: fairygui.GList },
        string,
        string
      >;
      type ItemTipSourceView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; txtSource: fairygui.GTextField },
        string,
        string
      >;
      type EquipDesc = __UIComponent<fairygui.GComponent, { txtDesc: fairygui.GTextField }, string, string>;
      type AttrTipDescView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; txtDesc: fairygui.GTextField },
        string,
        string
      >;
      type EquipSuitTTView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listName: fairygui.GList; txtAttr: fairygui.GTextField },
        string,
        string
      >;
      type EquipGemView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listGem: fairygui.GList },
        string,
        string
      >;
      type ItemTipTimeView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; txtTime: fairygui.GTextField },
        string,
        string
      >;
      type EquipZZExpView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; progress: UILib.Components.progressBar.progressBar_green },
        string,
        string
      >;
      type ItemTipCountView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; txtDesc: fairygui.GTextField },
        string,
        string
      >;
      type ItemTipAttrJXView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listAttr: fairygui.GList; txtAwakenLv: fairygui.GTextField },
        string,
        string
      >;
      type EquipRefineView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listAttr: fairygui.GList; txtRefineLv: fairygui.GTextField },
        string,
        string
      >;
      type EquipStarView = __UIComponent<fairygui.GComponent, { listStar: fairygui.GList }, string, string>;
      type ItemTipsSkillView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; txtDesc: fairygui.GTextField; txtName: fairygui.GTextField },
        string,
        string
      >;
      type ItemTipSpecialAttrView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listAttr: fairygui.GList },
        string,
        string
      >;
      type ItemSkillView = __UIComponent<
        fairygui.GComponent,
        { btnTitle: ItemTips.Components.ButtonTitle; listSkill: fairygui.GList },
        string,
        string
      >;
    }
    namespace Components.suit {
      type IESNameRender = __UIComponent<fairygui.GComponent, { txtName: fairygui.GTextField }, string, string>;
      type IESuitCARender = __UIComponent<
        fairygui.GComponent,
        { txtCondition: fairygui.GTextField; txtAttr: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace Web {
      type AttrWebTip = __UIComponent<
        fairygui.GComponent,
        {
          comRender: UILib.Components.render.RewardRender;
          listView: fairygui.GList;
          txtName: fairygui.GTextField;
          txtCount: fairygui.GTextField;
        },
        string,
        string
      >;
      type EquipCompareWebTip = __UIComponent<
        fairygui.GComponent,
        { leftEquip: ItemTips.Web.ItemEquipWebView; rightEquip: ItemTips.Web.ItemEquipWebView },
        "c1",
        string
      >;
      type EquipWebTip = __UIComponent<
        fairygui.GComponent,
        { itemEquipView: ItemTips.Web.ItemEquipWebView },
        string,
        string
      >;
      type ItemEquipWebView = __UIComponent<
        fairygui.GComponent,
        {
          imgQualityBg: fairygui.GLoader;
          qualityMod: fairygui.GGraph;
          loaderEquiped: fairygui.GLoader;
          render: UILib.Components.render.ItemCFGRender;
          listView: fairygui.GList;
          txtName: fairygui.GTextField;
          txtType: fairygui.GTextField;
          txtJob: fairygui.GTextField;
          txtLevel: fairygui.GTextField;
          txtBind: fairygui.GTextField;
          txtEquipLv: fairygui.GTextField;
          equipMod: fairygui.GGraph;
        },
        string,
        string
      >;
      type ItemWebTip = __UIComponent<
        fairygui.GComponent,
        {
          imgQualityBg: fairygui.GLoader;
          qualityMod: fairygui.GGraph;
          listView: fairygui.GList;
          render: UILib.Components.render.ItemCFGRender;
          txtName: fairygui.GTextField;
          txtType: fairygui.GTextField;
          txtLevel: fairygui.GTextField;
          txtNum: fairygui.GTextField;
          itemMod: fairygui.GGraph;
          txtFight: fairygui.GTextField;
          boxFight: fairygui.GGroup;
        },
        string,
        string
      >;
    }
  }
  namespace JobSwitch {
    type JobSwitchWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        txtCD: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        skillList: fairygui.GList;
        btnSwitch: UILib.Components.button.Button11;
        unlockBtnRed: fairygui.GImage;
        unlockRed1: fairygui.GImage;
        unlockRed2: fairygui.GImage;
        unlockRed3: fairygui.GImage;
        close: UILibFrame.Components.ButtonClose;
      },
      "jobSwitch",
      string
    >;
    type JobSwitchTaskWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnUnlock: UILib.Components.button.Button11;
        taskList: fairygui.GList;
        close: UILibFrame.Components.ButtonCloseBiz;
        btnHelp: UILibFrame.Components.ButtonHelp;
        btnNext: JobSwitch.Components.ButtonPage;
        btnPrev: JobSwitch.Components.ButtonPage;
        progressBar: JobSwitch.Components.TaskProgressBar;
      },
      "switchCtrl" | "stageCtrl",
      string
    >;
    namespace Components {
      type BtnJobSwitch1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnJobSwitch2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnJobSwitch3 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type JobSwitchSkillRender = __UIComponent<fairygui.GComponent, { skillIcon: fairygui.GLoader }, string, string>;
      type JobSwitchTaskRender = __UIComponent<
        fairygui.GComponent,
        { txtTask: fairygui.GTextField; btnGo: UILib.Components.button.Button14 },
        "stateCtrl",
        string
      >;
      type ButtonPage = __UIComponent<fairygui.GButton, {}, "button", string>;
      type TaskProgressBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
    }
  }
  namespace LandLegend {
    type LandLegendWindow = __UIComponent<
      fairygui.GComponent,
      {
        title: fairygui.GLoader;
        imgIntro: fairygui.GLoader;
        txtTime: fairygui.GTextField;
        group: LandLegend.Component.renderGroup;
        listTab: fairygui.GList;
        list1: fairygui.GList;
        list2: fairygui.GList;
        list3: fairygui.GList;
        list4: fairygui.GList;
        btnCheck: UILib.Components.button.Button11;
        close: UILib.Components.button.ButtonClose1;
      },
      "conPage" | "show",
      string
    >;
    namespace Component {
      type LandLegendRender = __UIComponent<
        fairygui.GButton,
        { txtName: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type LandBankRender = __UIComponent<
        fairygui.GComponent,
        { list: fairygui.GList; btnBuy: UILib.Components.button.Button11; txtLimit: fairygui.GTextField },
        string,
        string
      >;
      type LandShopRender = __UIComponent<
        fairygui.GComponent,
        { list: fairygui.GList; btnBuy: UILib.Components.button.Button11; txtLimit: fairygui.GTextField },
        string,
        string
      >;
      type LandBossRender = __UIComponent<
        fairygui.GComponent,
        {
          list: fairygui.GList;
          btnBuy: UILib.Components.button.Button11;
          txtDes: fairygui.GTextField;
          red: fairygui.GImage;
          txtLimit: fairygui.GTextField;
        },
        string,
        string
      >;
      type LandExchangeRender = __UIComponent<
        fairygui.GComponent,
        {
          list: fairygui.GList;
          btnBuy: UILib.Components.button.Button11;
          txtLimit1: fairygui.GTextField;
          txtLimit2: fairygui.GTextField;
          list2: fairygui.GList;
          red: fairygui.GImage;
        },
        string,
        string
      >;
      type LandLegendShowRender = __UIComponent<
        fairygui.GComponent,
        { itemIcon: fairygui.GLoader; txtShowName: fairygui.GTextField },
        string,
        string
      >;
      type renderGroup = __UIComponent<
        fairygui.GComponent,
        {
          show1: LandLegend.Component.LandLegendShowRender;
          show2: LandLegend.Component.LandLegendShowRender;
          show3: LandLegend.Component.LandLegendShowRender;
          group: fairygui.GGroup;
        },
        string,
        string
      >;
    }
  }
  namespace Learn {
    type LearnWindow = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        btnGet: Learn.Component.Button1;
        txtTime: fairygui.GTextField;
        item: UILib.Components.render.RewardRender1;
        costCount: fairygui.GTextField;
        close: UILibFrame.Components.ButtonCloseBiz;
        imgYlq: fairygui.GImage;
        txtName: fairygui.GTextField;
        btnGo: Learn.Component.Button2;
        txtSysj: fairygui.GImage;
        imgChain4: fairygui.GImage;
        imgChain3: fairygui.GImage;
        imgChain2: fairygui.GImage;
        imgChain1: fairygui.GImage;
        imgLock: fairygui.GLoader;
        txtSB: fairygui.GTextField;
        btnSB: Learn.Component.Button3;
        txtFreeTime: fairygui.GTextField;
        groupSB: fairygui.GGroup;
      },
      string,
      string
    >;
    namespace Component {
      type Button1 = __UIComponent<fairygui.GButton, { icon: fairygui.GImage }, "button", string>;
      type LearnRender = __UIComponent<
        fairygui.GComponent,
        {
          item: UILib.Components.render.RewardRender2;
          txtName: fairygui.GTextField;
          imgYlq: fairygui.GImage;
          btnGet: UILib.Components.button.Button14;
          txtStep: fairygui.GTextField;
          red: fairygui.GImage;
          txtSkillName: fairygui.GTextField;
        },
        string,
        string
      >;
      type Button2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button3 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace LegendaryRoad {
    type LegendaryRoadWindow = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        loaderAward: fairygui.GLoader;
        txtProgress: fairygui.GTextField;
        btnReceive: UILib.Components.button.Button11;
        listTask: fairygui.GList;
        close: UILib.Components.button.ButtonClose1;
      },
      string,
      string
    >;
    namespace Component {
      type LegendaryRoadTaskRender = __UIComponent<
        fairygui.GComponent,
        {
          txtDesc: fairygui.GTextField;
          itemList: fairygui.GList;
          btnReceive: UILib.Components.button.Button14;
          btnGo: UILib.Components.button.Button16;
        },
        "stateCtrl",
        string
      >;
      type LegendaryRoadRender = __UIComponent<
        fairygui.GButton,
        {
          loaderIcon: fairygui.GLoader;
          txtName: fairygui.GTextField;
          txtDesc: fairygui.GTextField;
          redPoint: fairygui.GImage;
          loaderComplete: fairygui.GImage;
        },
        "button",
        string
      >;
    }
  }
  namespace LevelPrompt {
    type LevelPromptWindow = __UIComponent<fairygui.GComponent, { txtLv: fairygui.GTextField }, string, string>;
  }
  namespace LimitGift {
    type LimitGiftWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonCloseBiz;
        txtTimes: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        txtMyLv: fairygui.GTextField;
        list: fairygui.GList;
        txtMyLv2: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Component {
      type LimitGiftRender = __UIComponent<
        fairygui.GComponent,
        {
          txtName: fairygui.GTextField;
          item: UILib.Components.render.RewardRender2;
          txtOldPrice: fairygui.GTextField;
          txtNowPrice: fairygui.GTextField;
          txtDiscount: fairygui.GTextField;
          imgGet: fairygui.GImage;
          btnBuy: UILib.Components.button.Button11;
          txtBuyCount: fairygui.GTextField;
          txtNeedLv: fairygui.GTextField;
          group: fairygui.GGroup;
        },
        string,
        string
      >;
    }
  }
  namespace Loader {
    type ProgressView = __UIComponent<
      fairygui.GComponent,
      { bgLoader: fairygui.GLoader; log: fairygui.GTextField; progressBar: Loader.Components.ProgressBar2 },
      string,
      string
    >;
    type LoginView = __UIComponent<
      fairygui.GComponent,
      {
        bgLoader: fairygui.GLoader;
        btnNotice: Loader.Components.BtnNotice;
        btnSwitchAccount: Loader.Components.BtnSwitch;
        btnEnterGame: Loader.Components.BtnEnterGame;
        loaderSelectServerState: fairygui.GLoader;
        txtSelectServerName: fairygui.GTextField;
        btnSelectServer: Loader.Components.Button3;
        selectServerGroup: fairygui.GGroup;
        touchLoginLayer: fairygui.GGraph;
        txtDesc: fairygui.GTextField;
        versionTxt: fairygui.GTextField;
        btnSecret: Loader.Components.BtnSecret;
        btnLoginOut: Loader.Components.BunLogout;
      },
      "loginCtrl",
      string
    >;
    namespace Components {
      type BtnNotice = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button3 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type BtnEnterGame = __UIComponent<fairygui.GButton, {}, "button", string>;
      type NoticeView = __UIComponent<
        fairygui.GComponent,
        {
          btnOk: Loader.Components.Button4;
          noticeTabList: fairygui.GList;
          txtTitle: fairygui.GTextField;
          comContent: Loader.Components.TxtComponet;
        },
        string,
        string
      >;
      type TxtComponet = __UIComponent<fairygui.GComponent, { txt: fairygui.GRichTextField }, string, string>;
      type Button4 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ServerView = __UIComponent<
        fairygui.GComponent,
        { serverList: fairygui.GList; serverTabList: fairygui.GList },
        string,
        string
      >;
      type Button_Close = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button1 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ServerRender = __UIComponent<
        fairygui.GButton,
        { serverState1: fairygui.GLoader; title: fairygui.GTextField; isNewIcon: fairygui.GLoader },
        "button",
        string
      >;
      type RealName = __UIComponent<fairygui.GComponent, { btnclose: Loader.Components.ButtonCloseBg }, string, string>;
      type ButtonCloseBg = __UIComponent<fairygui.GButton, {}, string, string>;
      type realnamecom = __UIComponent<
        fairygui.GComponent,
        {
          btnok: Loader.Components.ButtonOK;
          inName: fairygui.GTextField;
          inNr: fairygui.GTextField;
          txtError: fairygui.GTextField;
        },
        string,
        string
      >;
      type ButtonOK = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, string, string>;
      type BtnSwitch = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnSecret = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ContainerWindow = __UIComponent<
        fairygui.GComponent,
        {
          btnClose: Loader.Components.ButtonCloseBg;
          bg: fairygui.GLoader;
          close: Loader.Components.Button_Close;
          serverView: Loader.Components.ServerView;
          noticeView: Loader.Components.NoticeView;
          btnKnown: Loader.Components.Button5;
        },
        "contentCtrl",
        string
      >;
      type Button5 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type BunLogout = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ProgressBar2 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type SecretContent = __UIComponent<fairygui.GComponent, { txt: fairygui.GRichTextField }, string, string>;
    }
  }
  namespace LoongSoul {
    type LoongSoulWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        listBg: fairygui.GList;
        listSkill: fairygui.GList;
        textAttrName: fairygui.GTextField;
        textAttrValue: fairygui.GTextField;
        textNextAttrValue: fairygui.GTextField;
        txtFight: fairygui.GTextField;
        btnRight: LoongSoul.Component.btn_right;
        btnLeft: LoongSoul.Component.btn_right;
        curName: fairygui.GLoader;
        curLv: fairygui.GLoader;
        soulModel: fairygui.GGraph;
        jie: fairygui.GLoader;
        modGroup: fairygui.GGroup;
        btnLvUp: UILib.Components.button.Button11;
        itemRender: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        item: fairygui.GGroup;
        redPoint: fairygui.GImage;
        listStar: fairygui.GList;
        lvUpGroup: fairygui.GGroup;
        btnAct: LoongSoul.Component.btn_Active;
        imgMax: fairygui.GImage;
      },
      string,
      string
    >;
    namespace Component {
      type btn_right = __UIComponent<fairygui.GButton, {}, "button", string>;
      type LoongSoulSkillRender = __UIComponent<
        fairygui.GComponent,
        { skillIcon: fairygui.GLoader; txtLv: fairygui.GTextField },
        string,
        string
      >;
      type LoongStarRender = __UIComponent<fairygui.GComponent, {}, "c1", string>;
      type btn_Active = __UIComponent<fairygui.GButton, { mod: fairygui.GGraph }, "button", string>;
      type AttrBgRender = __UIComponent<fairygui.GComponent, {}, string, string>;
    }
  }
  namespace LvUpPush {
    type LvFiftyPushWindow = __UIComponent<
      fairygui.GComponent,
      { btnBuy: LvUpPush.Compontens.Button1; itemIcon: fairygui.GLoader },
      string,
      string
    >;
    type LvHundredPushWindow = __UIComponent<
      fairygui.GComponent,
      { btnBuy: LvUpPush.Compontens.Button1; itemIcon: fairygui.GLoader },
      string,
      string
    >;
    namespace Compontens {
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace Mail {
    type MailWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderBack0: fairygui.GLoader;
        loaderListBg: fairygui.GLoader;
        iconMail: fairygui.GImage;
        loaderTitle: fairygui.GLoader;
        loaderFrameR: fairygui.GLoader;
        textBack0: fairygui.GTextField;
        listAcc: fairygui.GList;
        groupAcc: fairygui.GGroup;
        listMail: fairygui.GList;
        btnAllSel: UILib.Components.button.CheckBox1;
        btnGetAll: UILib.Components.button.Button2_Orange;
        btnDelAll: UILib.Components.button.Button2_Blue;
        btnGetOne: UILib.Components.button.Button2_Orange;
        btnDelOne: UILib.Components.button.Button2_Blue;
        comContent: Mail.Components.comContent;
        txtCount: fairygui.GTextField;
        textTitle: fairygui.GTextField;
        textTime: fairygui.GTextField;
        textSender: fairygui.GTextField;
        textBack1: fairygui.GTextField;
        textBack2: fairygui.GTextField;
        textBack3: fairygui.GTextField;
        textBack4: fairygui.GTextField;
        groupMail: fairygui.GGroup;
      },
      "conMail" | "conAcc",
      string
    >;
    type PayTestWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        txtInfo: fairygui.GTextField;
        btnSubmit: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
    namespace Components {
      type comContent = __UIComponent<
        fairygui.GComponent,
        { listLine: fairygui.GList; txtContent: fairygui.GTextField },
        string,
        string
      >;
      type MailRender = __UIComponent<
        fairygui.GButton,
        {
          loaderRead1: fairygui.GLoader;
          iconFrameL: fairygui.GImage;
          loaderRead2: fairygui.GLoader;
          txtSenderBg: fairygui.GTextField;
          txtTitle: fairygui.GTextField;
          txtSender: fairygui.GTextField;
        },
        "button",
        string
      >;
    }
  }
  namespace MainUI {
    type MainUIView = __UIComponent<
      fairygui.GComponent,
      {
        MainUIScreenEffectView: MainUI.Components.ScreenEffect.screenEffect;
        MainUITopRightView: MainUI.Views.TopRight;
        MainUIBottomRightView: MainUI.Views.BottomRight;
        MainUIMiddleRightView: MainUI.Views.MiddleRight;
        JoystickView: MainUI.Views.Joystick;
        MainUITopLeftView: MainUI.Views.TopLeft;
        MainUIBottomMiddleView: MainUI.Views.BottomMiddle;
        MainUIMiddleLeftView: MainUI.Views.MiddleLeft;
        PopView: MainUI.Views.PopView;
        NpcQuickView: MainUI.Components.Npc.NpcQuickView;
      },
      string,
      string
    >;
    namespace Views {
      type Joystick = __UIComponent<
        fairygui.GComponent,
        { joystick_circle: MainUI.Components.Joystick.Joystick_Circle; touch: fairygui.GComponent },
        string,
        string
      >;
      type BottomRight = __UIComponent<
        fairygui.GComponent,
        {
          btnSpecial: MainUI.Components.BottomRight.ShortCutRender;
          shortCutCom: MainUI.Components.BottomRight.shortCutCom;
          btnPlayer: MainUI.Components.BottomRight.BtnPlayer;
          btnMonster: MainUI.Components.BottomRight.BtnMonster;
          btnAttack: MainUI.Components.BottomRight.BtnAttack;
          btnNear: MainUI.Components.MiddleRight.BtnTarget;
          btnChange: MainUI.Components.BottomRight.BtnChange;
          nearView: MainUI.Components.BottomRight.Near.NearView;
          faPop: MainUI.Components.BottomRight.faPop;
          shortCutGestrue: MainUI.Components.BottomRight.ShortCutGestrue;
          imgSpecial: fairygui.GImage;
          skillAll: fairygui.GGroup;
          itemShortCut2: MainUI.Components.BottomRight.ShortCutItemRender;
          itemShortCut1: MainUI.Components.BottomRight.ShortCutItemRender;
          btnAutoF: MainUI.Components.BottomRight.btnOnHook;
          btnDeploy: MainUI.Components.BottomRight.BtnOpen3;
          itemShortCut3: MainUI.Components.BottomRight.ShortCutItemRender;
          imgActBg: fairygui.GLoader;
          txtActTime: fairygui.GTextField;
          txtActName: fairygui.GTextField;
          imgActIcon: fairygui.GLoader;
          btnActivity: MainUI.Components.BottomRight.btnActivity;
        },
        "showCtrl" | "deploy3" | "conActivity",
        string
      >;
      type BottomMiddle = __UIComponent<
        fairygui.GComponent,
        {
          listChat: fairygui.GList;
          btnJobSwitch: MainUI.Components.BottomMiddle.JobSwitch.JobSwitch;
          btnCharge: MainUI.Components.BottomMiddle.ButtonReCharge;
          btnMillionMoney: MainUI.Components.BottomMiddle.btnMillionMoney;
          TweenCom: fairygui.GGroup;
          barExp: MainUI.Components.BottomMiddle.expBar;
          btnGm: UILib.Components.button.Button2_Orange;
          btnMail: MainUI.Components.BottomMiddle.btnMail;
          progressHp: MainUI.Components.BottomMiddle.ProgressHp;
          progressMp: MainUI.Components.BottomMiddle.ProgressMp;
          testBtnRide: MainUI.Components.BottomMiddle.btnRide;
          modFogHp: MainUI.Components.BottomMiddle.comModFogHp;
          comHp: MainUI.Components.BottomMiddle.comModHp;
          modFogMp: MainUI.Components.BottomMiddle.comModFogMp;
          comMp: MainUI.Components.BottomMiddle.comModMp;
          imgHpMp: fairygui.GLoader;
          txtHpMp: fairygui.GTextField;
          btnMsg: MainUI.Components.BottomMiddle.btnMsg;
        },
        "showCtrl",
        string
      >;
      type MiddleLeft = __UIComponent<
        fairygui.GComponent,
        {
          taskCom: MainUI.Components.MiddleLeft.TaskCom;
          teamCom: MainUI.Components.MiddleLeft.TeamCom;
          btnTask: MainUI.Components.MiddleLeft.BtnTaskMain;
          btnTeam: MainUI.Components.MiddleLeft.BtnTeam;
          group_normal: fairygui.GGroup;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
        },
        "c1" | "aniC1",
        string
      >;
      type TopRight = __UIComponent<
        fairygui.GComponent,
        {
          bossBtn: MainUI.Components.Boss.BossBtn;
          btnOpen: MainUI.Components.TopRight.Rdo1;
          btnCom: MainUI.Components.TopRight.TopRightBtns;
          loaderArea: fairygui.GLoader;
          textPos: fairygui.GTextField;
          limitBubble: fairygui.GLoader;
          lvUp50Bubble: fairygui.GLoader;
          lvUp100Bubble: fairygui.GLoader;
          mcBubble: fairygui.GLoader;
          legendaryEntry: MainUI.Components.TopRight.ButtonLegendaryRoad;
          nc06Bubble: fairygui.GLoader;
          nc30Bubble: fairygui.GLoader;
          nc68Bubble: fairygui.GLoader;
          btnCrossServer: MainUI.Components.TopRight.ButtonCrossServer;
          questionnaireBubble: fairygui.GLoader;
          txtTime: fairygui.GTextField;
        },
        "listPosState",
        "t0"
      >;
      type TopLeft = __UIComponent<
        fairygui.GComponent,
        {
          barbg: fairygui.GImage;
          mod: fairygui.GGraph;
          btnMode: MainUI.Components.TopLeft.BtnMode;
          btnBuff: MainUI.Components.TopLeft.BtnPrivilege;
          txtFight: fairygui.GTextField;
          btnRoleHead: MainUI.Components.TopLeft.BtnRoleHead;
          btnPreview: MainUI.Components.TopLeft.BtnPreview;
          touchCloseLayer: fairygui.GComponent;
          txt_lv: fairygui.GTextField;
          txt_screen: fairygui.GTextField;
          btnPrivilege: MainUI.Components.TopLeft.vip.BtnOpenVip;
          txtAtk: fairygui.GImage;
          txt_diamond: fairygui.GTextField;
          txt_transmigration: fairygui.GTextField;
          btnRankDiamond: MainUI.Components.TopLeft.ButtonRankDiamond;
          btnWayDiamond: MainUI.Components.TopLeft.ButtonWayDiamond;
          btnDrillingArtifact: MainUI.Components.TopLeft.ButtonDrillingArtifact;
          btnSurprise: MainUI.Components.TopLeft.ButtonSurprise;
          btnQmdj: MainUI.Components.TopLeft.ButtonQmdj;
          funGroup: fairygui.GGroup;
        },
        "jobCtrl",
        string
      >;
      type MiddleRight = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleRight.btnMid;
          btnList1: fairygui.GList;
          btnList2: fairygui.GList;
          btnList3: fairygui.GList;
          btnList4: fairygui.GList;
          btnList5: fairygui.GList;
          btnList6: fairygui.GList;
          btnUpgrade: MainUI.Components.MiddleRight.Button2;
          upgradeView: MainUI.Components.BottomRight.UpgradeView;
          btnBag: MainUI.Components.MiddleRight.Button_Bag;
          popBag: MainUI.Components.Pop.PopBagFullView;
          popMall: fairygui.GImage;
          treasureMapNotice: MainUI.Components.MiddleRight.TreasureMapNotice;
        },
        "posCtrl",
        string
      >;
      type PopView = __UIComponent<
        fairygui.GComponent,
        {
          noticeButtonView: MainUI.Components.BottomMiddle.NoticeButton.NoticeButtonView;
          autoMove: MainUI.Components.BottomRight.TaskTransferView;
          upgradeCom: MainUI.Components.TopMiddle.ComUpgrade;
          actView: MainUI.Components.ActList.ActView;
          actClientView: MainUI.Components.ActList.ActClientView;
        },
        string,
        string
      >;
    }
    namespace Components.Joystick {
      type Joystick_Circle = __UIComponent<
        fairygui.GComponent,
        { button: MainUI.Components.Joystick.BtnJoy },
        "stateCtrl",
        string
      >;
      type BtnJoy = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
    }
    namespace Components.BottomRight {
      type shortCutCom = __UIComponent<
        fairygui.GComponent,
        { shortCutList: MainUI.Components.BottomRight.ShortCutList },
        "pageCtrl",
        string
      >;
      type ShortCutList = __UIComponent<
        fairygui.GComponent,
        {
          shortCut_1: MainUI.Components.BottomRight.ShortCutRender;
          shortCut_2: MainUI.Components.BottomRight.ShortCutRender;
          shortCut_3: MainUI.Components.BottomRight.ShortCutRender;
          shortCut_4: MainUI.Components.BottomRight.ShortCutRender;
          shortCut_5: MainUI.Components.BottomRight.ShortCutRender;
          shortCut_6: MainUI.Components.BottomRight.ShortCutRender;
          shortCut_7: MainUI.Components.BottomRight.ShortCutRender;
          shortCut_8: MainUI.Components.BottomRight.ShortCutRender;
        },
        string,
        string
      >;
      type ShortCutRender = __UIComponent<
        fairygui.GButton,
        {
          skillbg: fairygui.GImage;
          skillPlus: fairygui.GImage;
          icon: fairygui.GLoader;
          cdMask: MainUI.Components.BottomRight.mask;
          cdGraph: fairygui.GGraph;
          autoMask: fairygui.GImage;
          title: fairygui.GTextField;
          count: fairygui.GTextField;
        },
        "button",
        "t0"
      >;
      type BtnAttack = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          cdMask: MainUI.Components.BottomRight.mask;
          cdGraph: fairygui.GGraph;
          title: fairygui.GTextField;
        },
        "button",
        string
      >;
      type TaskTransferView = __UIComponent<
        fairygui.GComponent,
        { autoHolder: fairygui.GGraph },
        "autoStateCtr",
        string
      >;
      type mask = __UIComponent<fairygui.GComponent, { bar: fairygui.GImage }, string, string>;
      type ShortCutItemRender = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          cdMask: MainUI.Components.BottomRight.mask;
          cdGraph: fairygui.GGraph;
          title: fairygui.GTextField;
          count: fairygui.GTextField;
        },
        "button",
        string
      >;
      type BtnChange = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnJobChange = __UIComponent<
        fairygui.GButton,
        {
          faCom: fairygui.GGroup;
          zhanCom: fairygui.GGroup;
          daoCom: fairygui.GGroup;
          title: fairygui.GTextField;
          cdMask: MainUI.Components.BottomRight.mask;
          cdGraph: fairygui.GGraph;
          cdTxt: fairygui.GTextField;
        },
        "button" | "jobCtrl",
        string
      >;
      type btnOnHook = __UIComponent<fairygui.GButton, { mod: fairygui.GGraph }, "button", string>;
      type faPop = __UIComponent<
        fairygui.GComponent,
        { icon: fairygui.GLoader; title: fairygui.GTextField },
        string,
        string
      >;
      type BtnPlayer = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnMonster = __UIComponent<fairygui.GButton, {}, "button", string>;
      type UpgradeView = __UIComponent<
        fairygui.GComponent,
        { bg: fairygui.GImage; upgradeList: fairygui.GList },
        "bgCtrl",
        string
      >;
      type btnSui = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnOpen3 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ShortCutGestrue = __UIComponent<
        fairygui.GComponent,
        { arrow: fairygui.GImage; button: fairygui.GImage },
        string,
        string
      >;
      type btnActivity = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
    namespace Components.MiddleRight {
      type Button_Bag = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage; full: fairygui.GImage },
        "button",
        string
      >;
      type btnMid = __UIComponent<fairygui.GButton, { redPoint: fairygui.GImage }, "button", string>;
      type BtnTarget = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnRide = __UIComponent<fairygui.GButton, { icon: fairygui.GImage }, "button", string>;
      type TreasureMapNotice = __UIComponent<
        fairygui.GComponent,
        {
          txtItem: fairygui.GTextField;
          mapName: fairygui.GTextField;
          btnGoTo: MainUI.Components.MiddleRight.btnTreasureMap;
          bar: MainUI.Components.MiddleRight.progressBar_yellow;
          btnClose: MainUI.Components.MiddleRight.btnTreasureMapClose;
        },
        "conState" | "conBar",
        string
      >;
      type btnTreasureMap = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type bar_yellow = __UIComponent<fairygui.GComponent, {}, string, string>;
      type progressBar_yellow = __UIComponent<
        fairygui.GProgressBar,
        { bar: MainUI.Components.MiddleRight.bar_yellow; barTitle: fairygui.GTextField },
        string,
        string
      >;
      type btnTreasureMapClose = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
    namespace Components.BottomMiddle {
      type ChatTextHead = __UIComponent<fairygui.GComponent, { textchat: fairygui.GRichTextField }, string, string>;
      type expBar = __UIComponent<fairygui.GProgressBar, { bar: fairygui.GImage }, string, string>;
      type ChatText = __UIComponent<
        fairygui.GComponent,
        { channelIcon: fairygui.GLoader; textchat: fairygui.GRichTextField },
        string,
        string
      >;
      type ChatFaceHead = __UIComponent<fairygui.GComponent, { graph: fairygui.GGraph }, string, string>;
      type MiddleBtnRender = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
      type BtnEquip = __UIComponent<fairygui.GButton, { red: fairygui.GImage }, "button", string>;
      type Button_Pet = __UIComponent<fairygui.GButton, {}, "button", string>;
      type comProgressHp = __UIComponent<fairygui.GComponent, {}, string, string>;
      type comProgressMp = __UIComponent<fairygui.GComponent, {}, string, string>;
      type btnRank = __UIComponent<fairygui.GButton, {}, "button", string>;
      type btnMail = __UIComponent<fairygui.GButton, { mailMod: fairygui.GGraph }, "button", string>;
      type btnSetting = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ProgressHp = __UIComponent<
        fairygui.GProgressBar,
        { bar_v: MainUI.Components.BottomMiddle.comProgressHp },
        string,
        string
      >;
      type ProgressMp = __UIComponent<
        fairygui.GProgressBar,
        { bar_v: MainUI.Components.BottomMiddle.comProgressMp },
        string,
        string
      >;
      type btnOnHook = __UIComponent<
        fairygui.GButton,
        { icon1: fairygui.GImage; icon0: fairygui.GImage },
        "button",
        string
      >;
      type Button_Bag = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage; full: fairygui.GImage },
        "button",
        string
      >;
      type TaskTransferView = __UIComponent<
        fairygui.GComponent,
        { autoHolder: fairygui.GGraph },
        "autoStateCtr",
        string
      >;
      type btnRide = __UIComponent<fairygui.GButton, {}, "button", string>;
      type comModHp = __UIComponent<
        fairygui.GComponent,
        { bg: fairygui.GImage; lineModHp: fairygui.GGraph },
        string,
        string
      >;
      type comModMp = __UIComponent<
        fairygui.GComponent,
        { bg: fairygui.GImage; lineModMp: fairygui.GGraph },
        string,
        string
      >;
      type comModFogHp = __UIComponent<fairygui.GComponent, { modHp: fairygui.GGraph }, string, string>;
      type comModFogMp = __UIComponent<fairygui.GComponent, { modMp: fairygui.GGraph }, string, string>;
      type ButtonReCharge = __UIComponent<
        fairygui.GButton,
        {
          lvPro: MainUI.Components.BottomMiddle.ProgressBar1;
          btnUse: UILib.Components.button.Button15;
          clickUseGroup: fairygui.GGroup;
        },
        "button" | "conLv",
        "t0"
      >;
      type ProgressBar1 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type btnMsg = __UIComponent<fairygui.GButton, { redPoint: fairygui.GImage }, "button", string>;
      type btnMillionMoney = __UIComponent<
        fairygui.GButton,
        { txtTime: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
    }
    namespace Components.MiddleLeft {
      type BtnOpen = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnTaskMain = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnTeam = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnTeamCreate = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnTeamSearch = __UIComponent<fairygui.GButton, {}, "button", string>;
      type TeamCom = __UIComponent<
        fairygui.GComponent,
        {
          list: fairygui.GList;
          btnCreate: MainUI.Components.MiddleLeft.BtnTeamCreate;
          btnSearch: MainUI.Components.MiddleLeft.BtnTeamSearch;
        },
        "hasTeam",
        string
      >;
      type MainUITeamMemberRender = __UIComponent<
        fairygui.GButton,
        {
          isLeader: fairygui.GImage;
          hp: MainUI.Components.TopLeft.progressBar_hp;
          roleLevel: fairygui.GTextField;
          roleName: fairygui.GTextField;
        },
        string,
        string
      >;
      type TaskRender = __UIComponent<
        fairygui.GButton,
        {
          taskName: fairygui.GTextField;
          taskIntro: fairygui.GTextField;
          taskAssist: fairygui.GTextField;
          taskMod: fairygui.GGraph;
        },
        "button",
        string
      >;
      type TaskCom = __UIComponent<
        fairygui.GComponent,
        { list: fairygui.GList; effectObj: fairygui.GGraph },
        string,
        string
      >;
      type MainUITaskAssistsView = __UIComponent<
        fairygui.GComponent,
        { taskFunctionList: fairygui.GList },
        string,
        string
      >;
      type MainUITaskAssistsRender = __UIComponent<
        fairygui.GButton,
        { titleTxt: fairygui.GTextField },
        "button",
        string
      >;
      type BtnActivity = __UIComponent<fairygui.GButton, {}, "button", string>;
      type TeamInfoOpWindow = __UIComponent<fairygui.GComponent, { funcList: fairygui.GList }, string, string>;
      type mainTaskScene = __UIComponent<
        fairygui.GComponent,
        {
          taskTitle: fairygui.GLoader;
          bossName: fairygui.GTextField;
          taskDesc: fairygui.GTextField;
          taskCondition: fairygui.GTextField;
        },
        "webCtr",
        string
      >;
    }
    namespace Components.TopRight {
      type TopRightBtns = __UIComponent<
        fairygui.GComponent,
        {
          btnList1: fairygui.GList;
          btnList2: fairygui.GList;
          btnList3: fairygui.GList;
          btnListBack1: fairygui.GList;
          btnListBack2: fairygui.GList;
          btnListBack3: fairygui.GList;
        },
        "showCtrl",
        string
      >;
      type FuncBtnRender = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          mod: fairygui.GGraph;
          iconTxt: fairygui.GLoader;
          redPoint: fairygui.GImage;
          flag: fairygui.GLoader;
        },
        "button",
        string
      >;
      type Rdo1 = __UIComponent<fairygui.GButton, { red: fairygui.GImage }, "button", "t0">;
      type subFuncCom = __UIComponent<fairygui.GComponent, { subFuncList: fairygui.GList }, string, string>;
      type FuncBtnRender1 = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          mod: fairygui.GGraph;
          redPoint: fairygui.GImage;
          iconTxt: fairygui.GLoader;
          flag: fairygui.GLoader;
        },
        "button",
        string
      >;
      type ButtonCard = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonSale = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonSet = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonLegendaryRoad = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; imgRed: fairygui.GImage },
        "button",
        string
      >;
      type ButtonCrossServer = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; imgDay: fairygui.GImage; txtDay: fairygui.GTextField },
        "button" | "conState",
        string
      >;
    }
    namespace Components.TopLeft {
      type BtnVip = __UIComponent<fairygui.GButton, { iconRed: fairygui.GImage }, "button" | "vipCtr", string>;
      type BtnBuff = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnMode = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type MainUIBuffRender = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          text_name: fairygui.GTextField;
          text_time: fairygui.GTextField;
          text_attr: fairygui.GTextField;
        },
        "button",
        string
      >;
      type BuffView = __UIComponent<fairygui.GComponent, { buffList: fairygui.GList }, string, "t0" | "t1">;
      type BtnRoleHead = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; red: fairygui.GImage },
        "button",
        string
      >;
      type BtnPrivilege = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type AtkModeView = __UIComponent<
        fairygui.GComponent,
        {
          btnPeace: MainUI.Components.TopLeft.BtnBaseMode;
          btnTeam: MainUI.Components.TopLeft.BtnBaseMode;
          btnGuild: MainUI.Components.TopLeft.BtnBaseMode;
          btnGoodEvil: MainUI.Components.TopLeft.BtnBaseMode;
          btnAll: MainUI.Components.TopLeft.BtnBaseMode;
          btnCamp: MainUI.Components.TopLeft.BtnBaseMode;
          btnCrossServer: MainUI.Components.TopLeft.BtnBaseMode;
        },
        "conCrossServer",
        "t0" | "t1"
      >;
      type BtnBaseMode = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
      type BtnPreview = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; nameIcon: fairygui.GLoader; redPoint: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type progressBar_hp = __UIComponent<
        fairygui.GProgressBar,
        { bar: MainUI.Components.TopLeft.bar_hp },
        string,
        string
      >;
      type progressBar_mp = __UIComponent<
        fairygui.GProgressBar,
        { bar: MainUI.Components.TopLeft.bar_mp },
        string,
        string
      >;
      type progressBar_xp = __UIComponent<
        fairygui.GProgressBar,
        { bar: MainUI.Components.TopLeft.bar_xp },
        string,
        string
      >;
      type bar_hp = __UIComponent<fairygui.GComponent, {}, string, string>;
      type bar_mp = __UIComponent<fairygui.GComponent, {}, string, string>;
      type bar_xp = __UIComponent<fairygui.GComponent, {}, string, string>;
      type BtnFight = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type FightView = __UIComponent<
        fairygui.GComponent,
        {
          img_dao: fairygui.GImage;
          img_fa: fairygui.GImage;
          txt_zhan: fairygui.GTextField;
          txt_fa: fairygui.GTextField;
          txt_dao: fairygui.GTextField;
        },
        string,
        string
      >;
      type BtnRecharge = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonRankDiamond = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonWayDiamond = __UIComponent<fairygui.GButton, { red: fairygui.GImage }, "button", string>;
      type ButtonSurprise = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; imgRed: fairygui.GImage; txtTime: fairygui.GTextField },
        "button",
        string
      >;
      type ButtonDrillingArtifact = __UIComponent<fairygui.GButton, { imgRed: fairygui.GImage }, "button", string>;
      type ButtonQmdj = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; imgRed: fairygui.GImage; txtTime: fairygui.GTextField },
        "button",
        string
      >;
    }
    namespace Components.BottomMiddle.NoticeButton {
      type NoticeButtonView = __UIComponent<fairygui.GComponent, { listButtons: fairygui.GList }, string, string>;
      type NoticeButtonItem = __UIComponent<fairygui.GButton, { imgBg: fairygui.GLoader }, "button", "t0">;
    }
    namespace Components.TopMiddle {
      type RoleHeadInfo = __UIComponent<
        fairygui.GComponent,
        {
          bg: fairygui.GImage;
          close: MainUI.Components.TopMiddle.Button_Close3;
          comMid: MainUI.Components.TopMiddle.ComHp;
          comUp: MainUI.Components.TopMiddle.ComHp;
          roleHead: fairygui.GLoader;
          textName: fairygui.GTextField;
          textHp: fairygui.GTextField;
        },
        string,
        string
      >;
      type Button_Close3 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BossHeadInfo = __UIComponent<
        fairygui.GComponent,
        {
          bg: fairygui.GImage;
          comDown: MainUI.Components.TopMiddle.ComHp;
          comMid: MainUI.Components.TopMiddle.ComHp;
          comUp: MainUI.Components.TopMiddle.ComHp;
          shieldBar: MainUI.Components.TopMiddle.BarShiled;
          bgCount: fairygui.GImage;
          txtHpCount: fairygui.GTextField;
          countGroup: fairygui.GGroup;
          bufflist: fairygui.GList;
          touchCloseLayer: fairygui.GComponent;
          comName: MainUI.Components.TopMiddle.comNameBossH;
          textHp: fairygui.GTextField;
          roleHead: fairygui.GLoader;
          txtBelong: fairygui.GTextField;
          btnEye: MainUI.Components.TopMiddle.ButtonEye;
          dropCom: MainUI.Components.TopMiddle.BossDropCom;
        },
        "typeCtrl",
        string
      >;
      type MonsterHeadInfo = __UIComponent<
        fairygui.GComponent,
        {
          barHp: MainUI.Components.TopMiddle.progressBar_monster;
          txtName: fairygui.GTextField;
          txtHp: fairygui.GTextField;
          roleHead: fairygui.GLoader;
          textLv: fairygui.GTextField;
        },
        string,
        string
      >;
      type ComHp = __UIComponent<fairygui.GComponent, { loaderIcon: fairygui.GLoader }, string, string>;
      type showDropView = __UIComponent<fairygui.GComponent, { showDropList: fairygui.GList }, string, string>;
      type progressBar_monster = __UIComponent<
        fairygui.GProgressBar,
        { bg: fairygui.GImage; bar: MainUI.Components.TopMiddle.ComHp },
        string,
        string
      >;
      type BossBuffRender = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type ComUpgrade = __UIComponent<
        fairygui.GComponent,
        { upgradeLv: fairygui.GTextField; upgradeHolder: fairygui.GGraph },
        string,
        string
      >;
      type BtnFlag = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BarShiled = __UIComponent<fairygui.GProgressBar, { bar: fairygui.GImage }, string, string>;
      type NameCom = __UIComponent<fairygui.GComponent, { textName: fairygui.GTextField }, string, string>;
      type comNameBossH = __UIComponent<fairygui.GComponent, { textNameL: fairygui.GTextField }, string, string>;
      type OtherHeadInfo = __UIComponent<
        fairygui.GComponent,
        {
          barHp: MainUI.Components.TopMiddle.progressBar_monster;
          txtName: fairygui.GTextField;
          txtHp: fairygui.GTextField;
          roleHead: fairygui.GLoader;
        },
        string,
        string
      >;
      type ButtonEye = __UIComponent<fairygui.GButton, {}, "button" | "c1", string>;
      type BossDropCom = __UIComponent<fairygui.GComponent, { dropList: fairygui.GList }, string, string>;
    }
    namespace Components.BottomRight.Near {
      type NearView = __UIComponent<
        fairygui.GComponent,
        {
          btnAttack: MainUI.Components.BottomRight.Near.AttackBtn;
          btnPlayer: UILib.Components.tab.tab_1;
          btnBoss: UILib.Components.tab.tab_1;
          playerList: fairygui.GList;
          bossList: fairygui.GList;
        },
        "typeCtrl",
        string
      >;
      type AttackBtn = __UIComponent<fairygui.GButton, {}, "lockCtr", string>;
      type NearBossRender = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type NearBloodBarMon = __UIComponent<fairygui.GProgressBar, { bar: fairygui.GImage }, string, string>;
      type NearPlayerRender = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; txtLv: fairygui.GTextField },
        "selectCtrl",
        string
      >;
      type tab = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
    namespace Components.Pop {
      type PopBottomMiddle = __UIComponent<
        fairygui.GComponent,
        { btnClose: MainUI.Components.Pop.PopClose; tip: fairygui.GRichTextField },
        string,
        string
      >;
      type PopClose = __UIComponent<fairygui.GButton, {}, string, string>;
      type PopMiddleRight = __UIComponent<
        fairygui.GComponent,
        { btnClose: MainUI.Components.Pop.PopClose; tip: fairygui.GTextField },
        "button",
        string
      >;
      type PopMiddleRight1 = __UIComponent<
        fairygui.GComponent,
        { btnClose: MainUI.Components.Pop.PopClose; tip: fairygui.GTextField },
        "button",
        string
      >;
      type PopBagFullView = __UIComponent<fairygui.GComponent, {}, string, string>;
      type PopFuncWindow = __UIComponent<
        fairygui.GComponent,
        {
          modBox: fairygui.GGraph;
          imgTitle: fairygui.GLoader;
          imgDesc: fairygui.GLoader;
          imgName: fairygui.GLoader;
          btnOk: UILib.Components.button.Button11;
        },
        string,
        string
      >;
    }
    namespace Components.Boss {
      type BossBtn = __UIComponent<fairygui.GButton, { red: fairygui.GImage }, "button", string>;
    }
    namespace Components.ScreenEffect {
      type screenEffect = __UIComponent<
        fairygui.GComponent,
        {
          img_candle: fairygui.GLoader;
          img_red: fairygui.GLoader;
          img_monster: fairygui.GLoader;
          img_player: fairygui.GLoader;
        },
        string,
        "redEffect" | "monsterEffect" | "playerEffect"
      >;
    }
    namespace Components.TopLeft.vip {
      type VipView = __UIComponent<
        fairygui.GComponent,
        {
          iconFrame: fairygui.GImage;
          iconTextVip: fairygui.GImage;
          progress: MainUI.Components.TopLeft.vip.VipBar;
          progressShare: MainUI.Components.TopLeft.vip.ProgressShare;
          iconRedVip: fairygui.GImage;
          iconRedShare: fairygui.GImage;
          txtDesc: fairygui.GTextField;
          txtLevel: fairygui.GTextField;
        },
        string,
        string
      >;
      type BtnOpenVip = __UIComponent<
        fairygui.GButton,
        { redPoint: fairygui.GImage; txtLoader: fairygui.GLoader },
        "button",
        string
      >;
      type comVip = __UIComponent<fairygui.GComponent, {}, string, string>;
      type ButtonVipShare = __UIComponent<
        fairygui.GButton,
        { progress: MainUI.Components.TopLeft.vip.comProgress; iconAlpha: fairygui.GImage; iconRed: fairygui.GImage },
        "button",
        string
      >;
      type comProgress = __UIComponent<fairygui.GComponent, { iconProgress: fairygui.GImage }, string, string>;
      type VipBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: MainUI.Components.TopLeft.vip.comVip; title: fairygui.GTextField },
        string,
        string
      >;
      type ProgressShare = __UIComponent<
        fairygui.GProgressBar,
        { iconBack: fairygui.GImage; bar_v: MainUI.Components.TopLeft.vip.comProgress; iconLingth: fairygui.GImage },
        string,
        string
      >;
    }
    namespace Components.ActList {
      type ActView = __UIComponent<
        fairygui.GComponent,
        {
          iconFrame: fairygui.GImage;
          iconFrame1: fairygui.GImage;
          iconFrame2: fairygui.GImage;
          loaderIcon: fairygui.GLoader;
          btnClose: MainUI.Components.ActList.ButtonClose;
          btnHint: UILib.Components.button.CheckBox1;
          btnEnter: MainUI.Components.ActList.ButtonEnter;
          txtName: fairygui.GTextField;
          txtHint: fairygui.GTextField;
          txtAward: fairygui.GTextField;
        },
        string,
        string
      >;
      type ButtonClose = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonEnter = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ActClientView = __UIComponent<
        fairygui.GComponent,
        {
          iconFrame: fairygui.GImage;
          iconFrame1: fairygui.GImage;
          iconFrame2: fairygui.GImage;
          btnClose: MainUI.Components.ActList.ButtonClose;
          btnEnter: MainUI.Components.ActList.ButtonEnter;
          txtName: fairygui.GTextField;
          txtExplain: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Components.Npc {
      type NpcQuickRender = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button" | "typeCtrl",
        string
      >;
      type NpcQuickView = __UIComponent<fairygui.GComponent, { npcList: fairygui.GList }, string, string>;
    }
    namespace Components.BottomMiddle.JobSwitch {
      type BtnJobSwitch1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnJobSwitch2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnJobSwitch3 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type JobSwitch = __UIComponent<fairygui.GComponent, { redPoint: fairygui.GImage }, "job", string>;
    }
  }
  namespace MainUIBR {}
  namespace MainUIMT {}
  namespace MainUIRT {}
  namespace MainUIWeb {
    type MainUIWebView = __UIComponent<
      fairygui.GComponent,
      {
        MainUIScreenEffectView: MainUIWeb.Components.ScreenEffect.screenEffect;
        MainUITopMiddleWebView: MainUIWeb.Views.TopMiddle;
        MainUITopLeftWebView: MainUIWeb.Views.TopLeft;
        MainUIBottomMiddleWebView: MainUIWeb.Views.BottomMiddle;
        MainUIMiddleRightWebView: MainUIWeb.Views.MiddleRight;
        MainUITopRightWebView: MainUIWeb.Views.TopRight;
        MainUIBottomLeftWebView: MainUIWeb.Views.BottomLeft;
        PopView: MainUIWeb.Views.PopView;
      },
      string,
      string
    >;
    namespace Components.ScreenEffect {
      type screenEffect = __UIComponent<
        fairygui.GComponent,
        {
          img_candle: fairygui.GLoader;
          img_red: fairygui.GLoader;
          img_monster: fairygui.GLoader;
          img_player: fairygui.GLoader;
        },
        string,
        "redEffect" | "monsterEffect" | "playerEffect"
      >;
    }
    namespace Views {
      type TopRight = __UIComponent<
        fairygui.GComponent,
        {
          bossBtn: MainUI.Components.Boss.BossBtn;
          btnOpen: MainUIWeb.Components.TopRight.Rdo1;
          btnCom: MainUIWeb.Components.TopRight.TopRightBtns;
          legendaryEntry: MainUIWeb.Components.TopRight.ButtonLegendaryRoad;
          btnCrossServer: MainUIWeb.Components.TopRight.ButtonCrossServer;
          specialCom: MainUIWeb.Components.TopRight.SpecialEnteryCom;
          limitBubble: fairygui.GLoader;
          lvUp50Bubble: fairygui.GLoader;
          lvUp100Bubble: fairygui.GLoader;
          mcBubble: fairygui.GLoader;
          nc06Bubble: fairygui.GLoader;
          nc30Bubble: fairygui.GLoader;
          nc68Bubble: fairygui.GLoader;
          questionnaireBubble: fairygui.GLoader;
        },
        "listPosState",
        "t0"
      >;
      type TopLeft = __UIComponent<
        fairygui.GComponent,
        {
          barbg: fairygui.GImage;
          mod: fairygui.GGraph;
          txtFight: fairygui.GTextField;
          btnPreview: MainUIWeb.Components.TopLeft.BtnPreview;
          touchCloseLayer: fairygui.GComponent;
          txt_screen: fairygui.GTextField;
          txtAtk: fairygui.GImage;
          txt_diamond: fairygui.GTextField;
          btnMode: MainUIWeb.Components.TopLeft.BtnMode;
          btnBuff: MainUIWeb.Components.TopLeft.BtnPrivilege;
          txt_transmigration: fairygui.GTextField;
          btnRankDiamond: MainUIWeb.Components.TopLeft.ButtonRankDiamond;
          btnWayDiamond: MainUIWeb.Components.TopLeft.ButtonWayDiamond;
          btnDrillingArtifact: MainUIWeb.Components.TopLeft.ButtonDrillingArtifact;
          btnSurprise: MainUIWeb.Components.TopLeft.ButtonSurprise;
          btnQmdj: MainUIWeb.Components.TopLeft.ButtonQmdj;
          funGroup: fairygui.GGroup;
          txt_dragonCrystal: fairygui.GTextField;
          btnRoleHead: MainUIWeb.Components.TopLeft.BtnRoleHead;
          btnPrivilege: MainUIWeb.Components.TopLeft.BtnOpenVip;
          txtRoleName: fairygui.GTextField;
          btnCharge: MainUIWeb.Components.TopLeft.BtnCharge;
        },
        string,
        string
      >;
      type TopMiddle = __UIComponent<fairygui.GComponent, {}, string, string>;
      type PopView = __UIComponent<
        fairygui.GComponent,
        {
          noticeButtonView: MainUI.Components.BottomMiddle.NoticeButton.NoticeButtonView;
          autoMove: MainUIWeb.Components.BottomRight.TaskTransferView;
          upgradeCom: MainUIWeb.Components.TopMiddle.ComUpgrade;
          actView: MainUI.Components.ActList.ActView;
          actClientView: MainUI.Components.ActList.ActClientView;
        },
        string,
        string
      >;
      type MiddleRight = __UIComponent<
        fairygui.GComponent,
        { taskCom: MainUIWeb.Components.MiddleRight.TaskCom },
        string,
        string
      >;
      type BottomMiddle = __UIComponent<
        fairygui.GComponent,
        {
          expBar: MainUIWeb.Components.BottomMiddle.expBar;
          btnSlave: MainUIWeb.Components.BottomMiddle.specialBtn;
          funcList: fairygui.GList;
          skillList: fairygui.GList;
          itemList: fairygui.GList;
          roleState: MainUIWeb.Components.BottomMiddle.RoleStateView;
          slaveRed: fairygui.GImage;
          btnJob: MainUIWeb.Components.BottomMiddle.jobSwitch;
          btnAuto: MainUIWeb.Components.BottomMiddle.guaBtn;
          btnRide: MainUIWeb.Components.BottomMiddle.guaBtn;
          btnGongLue: MainUIWeb.Components.BottomMiddle.guaBtn;
        },
        string,
        string
      >;
      type BottomLeft = __UIComponent<
        fairygui.GComponent,
        { chatCom: MainUIWeb.Components.BottomLeft.ChatView },
        "chatSizeCon",
        string
      >;
    }
    namespace Components.TopRight {
      type Rdo1 = __UIComponent<fairygui.GButton, { red: fairygui.GImage }, "button", "t0">;
      type TopRightBtns = __UIComponent<
        fairygui.GComponent,
        {
          btnList1: fairygui.GList;
          btnList2: fairygui.GList;
          btnList3: fairygui.GList;
          btnListBack1: fairygui.GList;
          btnListBack2: fairygui.GList;
          btnListBack3: fairygui.GList;
        },
        "showCtrl",
        string
      >;
      type ButtonLegendaryRoad = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; imgRed: fairygui.GImage },
        "button",
        string
      >;
      type ButtonCrossServer = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; imgDay: fairygui.GImage; txtDay: fairygui.GTextField },
        "button" | "conState",
        string
      >;
      type ButtonCircle = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type ButtonRect = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; imgNo: fairygui.GImage },
        "button",
        string
      >;
      type SpecialEnteryCom = __UIComponent<
        fairygui.GComponent,
        {
          btnSmallMap: MainUIWeb.Components.TopRight.ButtonCircle;
          btnRank: MainUIWeb.Components.TopRight.ButtonCircle;
          btnSale: MainUIWeb.Components.TopRight.ButtonCircle;
          btnFriend: MainUIWeb.Components.TopRight.ButtonCircle;
          btnTeam: MainUIWeb.Components.TopRight.ButtonCircle;
          btnMail: MainUIWeb.Components.TopRight.ButtonRect;
          btnVisual: MainUIWeb.Components.TopRight.ButtonRect;
          btnSound: MainUIWeb.Components.TopRight.ButtonRect;
          btnSet: MainUIWeb.Components.TopRight.ButtonRect;
        },
        string,
        string
      >;
      type FuncBtnRender = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          mod: fairygui.GGraph;
          iconTxt: fairygui.GLoader;
          redPoint: fairygui.GImage;
          flag: fairygui.GLoader;
        },
        "button",
        string
      >;
    }
    namespace Components.BottomRight {
      type BtnChange = __UIComponent<fairygui.GButton, {}, "button", string>;
      type faPop = __UIComponent<
        fairygui.GComponent,
        { icon: fairygui.GLoader; title: fairygui.GTextField },
        string,
        string
      >;
      type ShortCutGestrue = __UIComponent<
        fairygui.GComponent,
        { arrow: fairygui.GImage; button: fairygui.GImage },
        string,
        string
      >;
      type btnOnHook = __UIComponent<fairygui.GButton, { mod: fairygui.GGraph }, "button", string>;
      type btnActivity = __UIComponent<fairygui.GButton, {}, "button", string>;
      type TaskTransferView = __UIComponent<
        fairygui.GComponent,
        { autoHolder: fairygui.GGraph },
        "autoStateCtr",
        string
      >;
    }
    namespace Components.Pop {
      type PopBagFullView = __UIComponent<fairygui.GComponent, {}, string, string>;
    }
    namespace Components.TopLeft {
      type BtnMode = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type BtnPrivilege = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type BtnPreview = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; nameIcon: fairygui.GLoader; redPoint: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type ButtonRankDiamond = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonWayDiamond = __UIComponent<fairygui.GButton, { red: fairygui.GImage }, "button", string>;
      type ButtonDrillingArtifact = __UIComponent<fairygui.GButton, { imgRed: fairygui.GImage }, "button", string>;
      type ButtonSurprise = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; imgRed: fairygui.GImage; txtTime: fairygui.GTextField },
        "button",
        string
      >;
      type ButtonQmdj = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; imgRed: fairygui.GImage; txtTime: fairygui.GTextField },
        "button",
        string
      >;
      type BtnOpenVip = __UIComponent<
        fairygui.GButton,
        { redPoint: fairygui.GImage; txtLoader: fairygui.GLoader },
        "button",
        string
      >;
      type BtnRoleHead = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; red: fairygui.GImage },
        "button",
        string
      >;
      type BtnCharge = __UIComponent<fairygui.GButton, {}, "button", string>;
      type AtkModeView = __UIComponent<
        fairygui.GComponent,
        {
          btnPeace: MainUIWeb.Components.TopLeft.BtnBaseMode;
          btnTeam: MainUIWeb.Components.TopLeft.BtnBaseMode;
          btnGuild: MainUIWeb.Components.TopLeft.BtnBaseMode;
          btnGoodEvil: MainUIWeb.Components.TopLeft.BtnBaseMode;
          btnAll: MainUIWeb.Components.TopLeft.BtnBaseMode;
          btnCamp: MainUIWeb.Components.TopLeft.BtnBaseMode;
          btnCrossServer: MainUIWeb.Components.TopLeft.BtnBaseMode;
        },
        "conCrossServer",
        "t0" | "t1"
      >;
      type BtnBaseMode = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
      type BuffView = __UIComponent<fairygui.GComponent, { buffList: fairygui.GList }, string, "t0" | "t1">;
      type MainUIBuffRender = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          text_name: fairygui.GTextField;
          text_time: fairygui.GTextField;
          text_attr: fairygui.GTextField;
        },
        "button",
        string
      >;
    }
    namespace Components.MiddleRight {
      type TaskCom = __UIComponent<
        fairygui.GComponent,
        { list: fairygui.GList; clientTask: fairygui.GList; btnCtrl: MainUIWeb.Components.MiddleRight.btnCtrl },
        "openCon",
        string
      >;
      type TaskRender = __UIComponent<
        fairygui.GButton,
        {
          taskName: fairygui.GTextField;
          taskIntro: fairygui.GTextField;
          taskAssist: fairygui.GTextField;
          taskMod: fairygui.GGraph;
          btnFly: UILib.Components.button.ButtonAdd4;
        },
        "button",
        string
      >;
      type btnCtrl = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
    namespace Components.TopMiddle {
      type ComUpgrade = __UIComponent<
        fairygui.GComponent,
        { upgradeLv: fairygui.GTextField; upgradeHolder: fairygui.GGraph },
        string,
        string
      >;
    }
    namespace Components.BottomMiddle {
      type BottomMiddleBtn = __UIComponent<
        fairygui.GButton,
        {
          bg: fairygui.GLoader;
          funcIcon: fairygui.GLoader;
          funcName: fairygui.GLoader;
          redPoint: fairygui.GImage;
          iconFullBag: fairygui.GImage;
        },
        "button",
        string
      >;
      type expBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type specialBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type jobBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ShortRender = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          cdMask: MainUIWeb.Components.BottomMiddle.mask;
          cdGraph: fairygui.GGraph;
          autoMask: fairygui.GImage;
          title: fairygui.GTextField;
          count: fairygui.GTextField;
        },
        "button",
        string
      >;
      type hp = __UIComponent<fairygui.GComponent, { imgHp: fairygui.GLoader }, string, string>;
      type RoleStateView = __UIComponent<
        fairygui.GComponent,
        {
          hp: MainUIWeb.Components.BottomMiddle.hp;
          hpGraph: fairygui.GGraph;
          mp: MainUIWeb.Components.BottomMiddle.mp;
          mpGraph: fairygui.GGraph;
        },
        string,
        string
      >;
      type mp = __UIComponent<fairygui.GComponent, { imgMp: fairygui.GLoader }, string, string>;
      type mask = __UIComponent<fairygui.GComponent, { mpMask: fairygui.GImage }, string, string>;
      type jobSwitch = __UIComponent<fairygui.GComponent, { redPoint: fairygui.GImage }, "job", string>;
      type guaBtn = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
    }
    namespace Components.BottomLeft {
      type ChatView = __UIComponent<
        fairygui.GComponent,
        {
          imgBg: fairygui.GImage;
          btnOperate: MainUIWeb.Components.BottomLeft.ButtonArroChannel;
          channelListH: fairygui.GList;
          btnFace: MainUIWeb.Components.BottomLeft.ButtonNormal;
          btnEnter: MainUIWeb.Components.BottomLeft.ButtonNormal;
          btnLocal: MainUIWeb.Components.BottomLeft.ButtonNormal;
          chatList: fairygui.GList;
          btnSize: MainUIWeb.Components.BottomLeft.ButtonNormal;
          txtInput: fairygui.GTextField;
          btnArrow: MainUIWeb.Components.BottomLeft.ButtonArrow;
          operateList: fairygui.GList;
          listFace: fairygui.GList;
        },
        "operateCon" | "openCon" | "focusCon" | "faceCon",
        string
      >;
      type ButtonChannelS = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ButtonArroChannel = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button" | "arrowCon",
        string
      >;
      type ButtonChannelB = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ButtonNormal = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type ScrollBar1_arrow1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ScrollBar1_arrow2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ScrollBar1_grip = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ScrollBar1 = __UIComponent<
        fairygui.GScrollBar,
        {
          bar: fairygui.GGraph;
          arrow1: MainUIWeb.Components.BottomLeft.ScrollBar1_arrow1;
          arrow2: MainUIWeb.Components.BottomLeft.ScrollBar1_arrow2;
          grip: MainUIWeb.Components.BottomLeft.ScrollBar1_grip;
        },
        string,
        string
      >;
      type ChatComnRender = __UIComponent<
        fairygui.GComponent,
        { loaderChannel: fairygui.GLoader; txtMsg: fairygui.GRichTextField },
        string,
        string
      >;
      type ChatLeftRender = __UIComponent<
        fairygui.GComponent,
        { loaderChannel: fairygui.GLoader; txtMsg: fairygui.GRichTextField; txtName: fairygui.GRichTextField },
        string,
        string
      >;
      type ChatRightRender = __UIComponent<
        fairygui.GComponent,
        { loaderChannel: fairygui.GLoader; txtMsg: fairygui.GRichTextField; txtName: fairygui.GRichTextField },
        string,
        string
      >;
      type ButtonArrow = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ChatFaceSRender = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
    }
  }
  namespace Mall {
    type MallWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        relation: UILibFrame.Components.WindowRelationList;
      },
      string,
      string
    >;
    type MallItemWindow = __UIComponent<
      fairygui.GComponent,
      {
        comLoong: Mall.Components.comAttr;
        comAttr101: Mall.Components.comAttr;
        btnRecharge1: UILib.Components.button.ButtonAdd3;
        btnRefresh: UILib.Components.button.Button11;
        btnRecharge2: UILib.Components.button.ButtonAdd3;
        txtTime: fairygui.GTextField;
        rewardList: fairygui.GList;
        itemList: fairygui.GList;
        txtRefreshNeed: fairygui.GTextField;
      },
      string,
      string
    >;
    type MallMoneyWindow = __UIComponent<
      fairygui.GComponent,
      {
        comList: Mall.Components.comList;
        comAttr: Mall.Components.comAttr;
        btnRechargeSmall: UILib.Components.button.ButtonAdd3;
        btnRecharge: UILib.Components.button.Button11;
      },
      string,
      string
    >;
    type MallLoongWindow = __UIComponent<
      fairygui.GComponent,
      {
        comList: Mall.Components.comList;
        comAttr: Mall.Components.comAttr;
        btnRechargeSmall: UILib.Components.button.ButtonAdd3;
        btnRecharge: UILib.Components.button.Button11;
      },
      string,
      string
    >;
    namespace Components {
      type MallRender = __UIComponent<
        fairygui.GButton,
        {
          iconFrame: fairygui.GLoader;
          loaderCost: fairygui.GLoader;
          render: UILib.Components.render.RewardRender;
          txtName: fairygui.GTextField;
          txtCost: fairygui.GTextField;
          txtCard: fairygui.GTextField;
          loaderMark: fairygui.GLoader;
          loaderSellOut: fairygui.GImage;
          txtLimit: fairygui.GRichTextField;
        },
        "conPrice" | "conSellOut" | "button",
        string
      >;
      type ButtonRecharge = __UIComponent<fairygui.GButton, {}, "button", string>;
      type comAttr = __UIComponent<
        fairygui.GButton,
        { iconBack: fairygui.GImage; icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
      type comList = __UIComponent<
        fairygui.GComponent,
        { mask: fairygui.GGraph; listMall: fairygui.GList },
        string,
        string
      >;
      type MallItemRender = __UIComponent<
        fairygui.GComponent,
        {
          imgMoney: fairygui.GLoader;
          txtName: fairygui.GTextField;
          txtCount: fairygui.GTextField;
          item: UILib.Components.render.RewardRender;
          btnBuy: UILib.Components.button.Button2_Orange;
          txtDiscount: fairygui.GTextField;
          loaderSellOut: fairygui.GImage;
        },
        "conDiscount" | "conOut",
        string
      >;
      type MallRewardRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.RewardRender; imgDiscount: fairygui.GLoader; txtDiscount: fairygui.GTextField },
        string,
        string
      >;
    }
  }
  namespace MallBuy {
    type MallBuyWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comTipsBg;
        render: UILib.Components.render.RewardRender;
        txtName: fairygui.GTextField;
        txtLv: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        iconInputBg: fairygui.GImage;
        loaderMAll: fairygui.GLoader;
        txtMonwyAllBg: fairygui.GTextField;
        txtCount: fairygui.GTextField;
        txtTotal: fairygui.GTextField;
        btnAdd: UILib.Components.button.ButtonAdd;
        btnMinus: UILib.Components.button.ButtonMinus;
        txtBuyNum: fairygui.GTextField;
        btnMax: UILib.Components.button.ButtonMax;
        txtLimit: fairygui.GRichTextField;
        boxBuy: fairygui.GGroup;
        btnBuy: UILib.Components.button.Button2_Orange;
        txtType: fairygui.GTextField;
      },
      "conLimit",
      string
    >;
  }
  namespace MallBuyQuick {
    type MallBuyQuickWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        iconFrameL: fairygui.GImage;
        iconFrameR: fairygui.GImage;
        iconArrow: fairygui.GImage;
        iconInputBg: fairygui.GImage;
        iconDown: fairygui.GImage;
        listMall: fairygui.GList;
        loaderTitle: fairygui.GLoader;
        loaderM: fairygui.GLoader;
        loaderMAll: fairygui.GLoader;
        slider: UILib.Components.slider.Slider1;
        render: UILib.Components.render.RewardRender;
        btnMinus: UILib.Components.button.ButtonMinus;
        btnAdd: UILib.Components.button.ButtonAdd;
        btnBuy: UILib.Components.button.Button2_Orange;
        comDesc: MallBuyQuick.Components.comText;
        txtMoneyBg: fairygui.GTextField;
        txtMonwyAllBg: fairygui.GTextField;
        txtCountBg: fairygui.GTextField;
        txtName: fairygui.GTextField;
        txtMoney: fairygui.GTextField;
        txtCount: fairygui.GTextField;
        txtTotal: fairygui.GTextField;
        txtLimit: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type comText = __UIComponent<fairygui.GComponent, { txtDesc: fairygui.GRichTextField }, string, string>;
      type MallQuickRender = __UIComponent<
        fairygui.GComponent,
        { render: UILib.Components.render.RewardRender },
        string,
        string
      >;
    }
  }
  namespace MapNpcLand {
    type MapNPCLandWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonTipsClose;
        listMap: fairygui.GList;
        txtDesc: fairygui.GTextField;
        txtName: fairygui.GTextField;
        txtCondition: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type MapNpcLandRender = __UIComponent<fairygui.GButton, { txtName: fairygui.GTextField }, "button", string>;
    }
  }
  namespace MapPrompt {
    type MapPromptWindow = __UIComponent<fairygui.GComponent, { rateLoader: fairygui.GLoader }, string, string>;
  }
  namespace Maze {
    type MazeWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonTipsClose;
        txtInfo: fairygui.GTextField;
        txtName: fairygui.GTextField;
        list: fairygui.GList;
      },
      string,
      string
    >;
    type MazeRender = __UIComponent<
      fairygui.GComponent,
      {
        rewardList: fairygui.GList;
        btnGet: UILib.Components.button.Button12;
        txtName: fairygui.GTextField;
        txtCount: fairygui.GTextField;
      },
      "getState",
      string
    >;
  }
  namespace Medal {
    type MedalWindow = __UIComponent<
      fairygui.GComponent,
      {
        attrList: fairygui.GList;
        starList: fairygui.GList;
        btnUpgrade: UILib.Components.button.Button11;
        txtValue: fairygui.GTextField;
        imgName: fairygui.GLoader;
        txtRank: fairygui.GTextField;
        skillIcon: fairygui.GLoader;
        txtFight: fairygui.GTextField;
        mod: fairygui.GGraph;
        list: fairygui.GList;
        needItem: UILib.Components.render.ItemCFGRender;
        costNum: fairygui.GTextField;
      },
      "maxState",
      string
    >;
    type MeritWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        relation: UILibFrame.Components.WindowRelationList;
      },
      string,
      string
    >;
    type MagicalWindow = __UIComponent<
      fairygui.GComponent,
      {
        attrList: fairygui.GList;
        starList: fairygui.GList;
        btnUpgrade: UILib.Components.button.Button11;
        imgName: fairygui.GLoader;
        txtRank: fairygui.GTextField;
        skillIcon: fairygui.GLoader;
        txtFight: fairygui.GTextField;
        mod: fairygui.GGraph;
        needItem: UILib.Components.render.ItemCFGRender;
        costNum: fairygui.GTextField;
        equipList: fairygui.GList;
        headList: fairygui.GList;
      },
      "maxState",
      string
    >;
    type WarShieldWindow = __UIComponent<
      fairygui.GComponent,
      {
        attrList: fairygui.GList;
        starList: fairygui.GList;
        btnUpgrade: UILib.Components.button.Button11;
        imgName: fairygui.GLoader;
        txtRank: fairygui.GTextField;
        mod: fairygui.GGraph;
        txtItemCost: fairygui.GTextField;
        headList: fairygui.GList;
        helpBtn: UILib.Components.button.ButtonHelp;
        soulRender: Medal.Components.WarShieldBloodRender;
        txtSoul: fairygui.GTextField;
        txtMoneyTimes: fairygui.GTextField;
        txtMoneyCost: fairygui.GTextField;
        skillIcon: fairygui.GLoader;
        skillName: fairygui.GTextField;
        skillDesc: fairygui.GTextField;
        btnActive: UILib.Components.button.Button11;
        needItem: UILib.Components.render.ItemCFGRender;
        costNum: fairygui.GTextField;
        btnMoneyBaptize: UILib.Components.button.Button3_yellow;
        btnItemBaptize: UILib.Components.button.Button3_green;
        expPro: Medal.Components.ProgressBar2;
      },
      "gradeCon" | "baptizeCon" | "soulCon",
      string
    >;
    type WarShieldSkillWindow = __UIComponent<
      fairygui.GComponent,
      {
        skillBg: fairygui.GImage;
        txtLevel: fairygui.GTextField;
        txtDesc: fairygui.GRichTextField;
        txtName: fairygui.GTextField;
        txtNextDesc: fairygui.GRichTextField;
        tfGroup: fairygui.GGroup;
        txtTile: fairygui.GTextField;
        smGroup: fairygui.GGroup;
        imgLine: fairygui.GImage;
        item: UILib.Components.render.ItemCFGRender;
        txtCost: fairygui.GTextField;
        imgIcon: fairygui.GLoader;
        loaderMax: fairygui.GLoader;
        close: UILib.Components.button.ButtonClose;
        btnUpgrade: UILib.Components.button.Button11;
      },
      "maxCon",
      string
    >;
    namespace Components {
      type MedalStarRender = __UIComponent<fairygui.GComponent, { star0: fairygui.GImage }, "conChange", string>;
      type MedalRender = __UIComponent<
        fairygui.GButton,
        {
          imgBg: fairygui.GImage;
          imgSelect: fairygui.GImage;
          imgName: fairygui.GLoader;
          txtRank: fairygui.GTextField;
          imgHead: fairygui.GLoader;
          red: fairygui.GImage;
        },
        "button",
        string
      >;
      type MedalAttrRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtValue: fairygui.GTextField; needTxtValue: fairygui.GTextField },
        "con",
        string
      >;
      type MagicHeadRender = __UIComponent<
        fairygui.GButton,
        { headLoader: fairygui.GLoader; txtName: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type WarShieldHeadRender = __UIComponent<
        fairygui.GButton,
        { headLoader: fairygui.GLoader; txtName: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type WarShieldAttrRender = __UIComponent<
        fairygui.GComponent,
        { proVal: Medal.Components.ProgressBar2; txtName: fairygui.GTextField },
        string,
        string
      >;
      type WarShieldBloodRender = __UIComponent<fairygui.GComponent, {}, string, string>;
      type ProgressBar2 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
    }
  }
  namespace MergeContinuePay {
    type MergeContinuePayWindow = __UIComponent<
      fairygui.GComponent,
      {
        actDesc: fairygui.GTextField;
        actTime: fairygui.GTextField;
        btnPay20: UILib.Components.button.Button11;
        btnPay200: UILib.Components.button.Button11;
        list: fairygui.GList;
        item: UILib.Components.render.RewardRender1;
        txtGetCount: fairygui.GTextField;
        btnGet: UILib.Components.button.Button11;
      },
      "stateCon",
      string
    >;
    type MergeContinuePayRender = __UIComponent<
      fairygui.GComponent,
      {
        txtRmb: fairygui.GTextField;
        txtDay: fairygui.GTextField;
        list: fairygui.GList;
        btnGet: UILib.Components.button.Button14;
      },
      "stateCon",
      string
    >;
  }
  namespace MergeMysteryShop {
    type MergeMysteryShopWindow = __UIComponent<
      fairygui.GComponent,
      {
        rewardList: fairygui.GList;
        btnRefresh: MergeMysteryShop.Button1;
        txtRefreshTime: fairygui.GTextField;
        txtMoney: fairygui.GTextField;
        txtTime: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
      },
      string,
      string
    >;
    type MergeMysteryShopRender = __UIComponent<
      fairygui.GComponent,
      {
        txtName: fairygui.GTextField;
        item: UILib.Components.render.RewardRender;
        txtOriginalPrice: fairygui.GTextField;
        txtPrice: fairygui.GTextField;
        btnBuy: UILib.Components.button.Button14;
        imgDiscount: fairygui.GLoader;
        txtDiscount: fairygui.GTextField;
      },
      string,
      string
    >;
    type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
  }
  namespace MergerConsumeCarnival {
    type MergerConsumeCarnivalWindow = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        txtMyCost: fairygui.GTextField;
        txtMyRank: fairygui.GTextField;
        btnRecharge: UILib.Components.button.Button14;
      },
      string,
      string
    >;
    type MergerConsumeCarnivalRender = __UIComponent<
      fairygui.GComponent,
      {
        titleLoader: fairygui.GLoader;
        awardList: fairygui.GList;
        txtName: fairygui.GTextField;
        txtCost: fairygui.GTextField;
      },
      "titleCon" | "nameCon",
      string
    >;
  }
  namespace MergerDiscountGift {
    type MergerDiscountGiftRender = __UIComponent<
      fairygui.GComponent,
      {
        item: UILib.Components.render.RewardRender;
        imgDiscount: fairygui.GLoader;
        imgTitle: fairygui.GLoader;
        txtOldPrice: fairygui.GTextField;
        imgType1: fairygui.GLoader;
        txtPrice: fairygui.GTextField;
        imgType2: fairygui.GLoader;
        btnBuy: UILib.Components.button.Button11;
      },
      "conState",
      string
    >;
    type MergerDiscountGiftWindow = __UIComponent<fairygui.GComponent, { list: fairygui.GList }, string, string>;
  }
  namespace MillionChallenge {
    type MillionChallengeWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonClose;
        txtContent: fairygui.GTextField;
        txtReLv: fairygui.GTextField;
        button: UILib.Components.button.Button11;
        txtTime: fairygui.GTextField;
      },
      string,
      string
    >;
  }
  namespace MoneyChallenge {
    type MoneyChallengeWindow = __UIComponent<
      fairygui.GComponent,
      {
        btn1: UILib.Components.button.Button11;
        btn2: UILib.Components.button.Button11;
        btn3: UILib.Components.button.Button11;
        txtDiamond: fairygui.GTextField;
        group: fairygui.GGroup;
        close: UILibFrame.Components.ButtonCloseBiz;
        txtBizTime: fairygui.GTextField;
        red1: fairygui.GImage;
        red2: fairygui.GImage;
        red3: fairygui.GImage;
        listTab: fairygui.GList;
      },
      string,
      string
    >;
    type BossFirstKillWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtPlayer: fairygui.GTextField;
        listL: fairygui.GList;
        listR: fairygui.GList;
        btnGet: UILib.Components.button.Button11;
        listAwardPerson: fairygui.GList;
        red: fairygui.GImage;
        btnL: MoneyChallenge.Component.ButtonLeft;
        btnR: MoneyChallenge.Component.ButtonRight;
        txtFirstKill: fairygui.GTextField;
        listAward: fairygui.GList;
        listAwardAllHuman: fairygui.GList;
        roleInView: UILib.Components.roleInView.RoleInView;
        imgGetFk: fairygui.GLoader;
        imgGetAp: fairygui.GLoader;
      },
      string,
      string
    >;
    type AllServerBoomWindow = __UIComponent<
      fairygui.GComponent,
      {
        btn_1: MoneyChallenge.Component.roleEquipTab;
        btn_2: MoneyChallenge.Component.roleEquipTab;
        btn_3: MoneyChallenge.Component.roleEquipTab;
        btn_4: MoneyChallenge.Component.roleEquipTab;
        btn_5: MoneyChallenge.Component.roleEquipTab;
        list: fairygui.GList;
        red1: fairygui.GImage;
        red5: fairygui.GImage;
        red4: fairygui.GImage;
        red3: fairygui.GImage;
        red2: fairygui.GImage;
      },
      "conPage",
      string
    >;
    type PersonalBoomWindow = __UIComponent<
      fairygui.GComponent,
      {
        btn_1: MoneyChallenge.Component.roleEquipTab;
        btn_2: MoneyChallenge.Component.roleEquipTab;
        btn_3: MoneyChallenge.Component.roleEquipTab;
        btn_4: MoneyChallenge.Component.roleEquipTab;
        btn_5: MoneyChallenge.Component.roleEquipTab;
        red1: fairygui.GImage;
        red5: fairygui.GImage;
        red4: fairygui.GImage;
        red3: fairygui.GImage;
        red2: fairygui.GImage;
        list: fairygui.GList;
      },
      "conPage",
      string
    >;
    namespace Component {
      type BossFirstKillLRender = __UIComponent<
        fairygui.GButton,
        { img: fairygui.GLoader; red: fairygui.GImage },
        "button",
        string
      >;
      type BossFirstKilRRender = __UIComponent<
        fairygui.GButton,
        {
          imgHead: fairygui.GLoader;
          red: fairygui.GImage;
          txtName: fairygui.GTextField;
          dj: fairygui.GTextField;
          txtLv: fairygui.GTextField;
          imgGet: fairygui.GLoader;
          imgDie: fairygui.GLoader;
        },
        "button",
        string
      >;
      type AllServerBoomRender = __UIComponent<
        fairygui.GComponent,
        {
          listAward: fairygui.GList;
          txtPlayer: fairygui.GTextField;
          weapon: UILib.Components.render.RewardRender;
          btnGet: UILib.Components.button.Button11;
          txtCount: fairygui.GTextField;
          btnNot: UILib.Components.button.Button11;
          groups: fairygui.GGroup;
          imgGet: fairygui.GLoader;
          red: fairygui.GImage;
        },
        string,
        string
      >;
      type PersonalBoomRender = __UIComponent<
        fairygui.GComponent,
        {
          listAward: fairygui.GList;
          weapon: UILib.Components.render.RewardRender;
          txtCount: fairygui.GTextField;
          btnGet: UILib.Components.button.Button11;
          btnNot: UILib.Components.button.Button11;
          groups: fairygui.GGroup;
          imgGet: fairygui.GLoader;
          red: fairygui.GImage;
        },
        string,
        string
      >;
      type MoneyChallengeTabRender = __UIComponent<
        fairygui.GButton,
        { txtName: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type roleEquipTab = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; red: fairygui.GImage },
        "button",
        string
      >;
      type ButtonLeft = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonRight = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace MoonInvestment {
    namespace Components {
      type MoonInvestmentRender = __UIComponent<
        fairygui.GComponent,
        {
          txtDay: fairygui.GTextField;
          item1: UILib.Components.render.RewardRender2;
          item2: UILib.Components.render.RewardRender2;
          btnGet1: MoonInvestment.Components.ButtonGet;
          btnGet2: MoonInvestment.Components.ButtonGet;
          imgRed1: fairygui.GImage;
          imgRed2: fairygui.GImage;
          imgLv: fairygui.GLoader;
        },
        "conState1" | "conState2",
        string
      >;
      type ButtonGet = __UIComponent<fairygui.GButton, {}, "button", string>;
      type btnBuy = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
    }
    type MoonInvestmentWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonCloseBiz;
        txtTime: fairygui.GTextField;
        list: fairygui.GList;
        btnR: Investment.Component.ButtonR;
        btnL: Investment.Component.ButtonL;
        btnCharge: MoonInvestment.Components.btnBuy;
      },
      "conState",
      string
    >;
  }
  namespace NotEnough {
    type NotEnoughWindow = __UIComponent<
      fairygui.GComponent,
      {
        listEnough: fairygui.GList;
        item: UILib.Components.render.ItemCFGRender;
        itemName: fairygui.GTextField;
        close: UILib.Components.button.ButtonClose;
      },
      string,
      string
    >;
    namespace components {
      type NotERender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; btnFun: NotEnough.components.Button1 },
        string,
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
  }
  namespace Notice {
    type NoticeView = __UIComponent<
      fairygui.GComponent,
      {
        firstBillboardNotice: Notice.FirstBillboardNoticeView;
        nineBillboardNotice: Notice.NineBillboardNoticeView;
        fightPowerNotice: Notice.Components.FightPowerNoticeItem;
        effectNotice: Notice.EffectNoticeView;
        changeMapView: Notice.ChangeMapView;
        suitNotice: Notice.SuitNoticeView;
        crossServerNotice: Notice.CSTimeNoticeView;
        effectCountdown: Notice.EffectCountdownView;
      },
      string,
      string
    >;
    type FirstBillboardNoticeView = __UIComponent<
      fairygui.GComponent,
      { bg: fairygui.GImage; lblText: fairygui.GRichTextField },
      string,
      string
    >;
    type EffectNoticeView = __UIComponent<
      fairygui.GComponent,
      { equipRecycle: Notice.EquipRecycleView },
      string,
      string
    >;
    type Suit2View = __UIComponent<
      fairygui.GComponent,
      {
        iconLeft: fairygui.GImage;
        iconRight: fairygui.GImage;
        iconTitle: fairygui.GImage;
        loaderItem0: fairygui.GLoader;
        loaderItem1: fairygui.GLoader;
        anim: fairygui.GGraph;
      },
      string,
      string
    >;
    type Suit4View = __UIComponent<
      fairygui.GComponent,
      {
        iconLeft: fairygui.GImage;
        iconRight: fairygui.GImage;
        iconTitle: fairygui.GImage;
        iconBg: fairygui.GImage;
        listItem: fairygui.GList;
        anim: fairygui.GGraph;
      },
      string,
      string
    >;
    type Suit8View = __UIComponent<
      fairygui.GComponent,
      {
        iconLeft: fairygui.GImage;
        iconRight: fairygui.GImage;
        iconTitle: fairygui.GImage;
        iconBg: fairygui.GImage;
        listItem: fairygui.GList;
        anim: fairygui.GGraph;
      },
      string,
      string
    >;
    type SuitNoticeView = __UIComponent<
      fairygui.GComponent,
      { comSuit8: Notice.Suit8View; comSuit4: Notice.Suit4View; comSuit2: Notice.Suit2View },
      string,
      string
    >;
    type ChangeMapView = __UIComponent<fairygui.GComponent, { mapName: fairygui.GLoader }, string, string>;
    type CSTimeNoticeView = __UIComponent<
      fairygui.GComponent,
      {
        iconBg: fairygui.GImage;
        txtTime: fairygui.GTextField;
        loaderText: fairygui.GLoader;
        loaderTime: fairygui.GLoader;
      },
      "conTime",
      string
    >;
    type NineBillboardNoticeView = __UIComponent<
      fairygui.GComponent,
      { comNine: Notice.Components.comNineBillboard },
      string,
      string
    >;
    type EquipRecycleView = __UIComponent<fairygui.GComponent, { txtMoney: fairygui.GTextField }, string, string>;
    type EffectCountdownView = __UIComponent<
      fairygui.GComponent,
      { countDownCom: Notice.CountdownView },
      string,
      string
    >;
    type CountdownView = __UIComponent<
      fairygui.GComponent,
      { num3: fairygui.GImage; num2: fairygui.GImage; num1: fairygui.GImage; numEnd: fairygui.GImage },
      string,
      "t0" | "t1" | "t2" | "t3"
    >;
    namespace Components {
      type AttrSuitItem = __UIComponent<fairygui.GComponent, { suitImg: fairygui.GLoader }, string, string>;
      type FixedNoticeItem = __UIComponent<
        fairygui.GComponent,
        { bg1: fairygui.GImage; icon1: fairygui.GLoader; title1: fairygui.GRichTextField },
        string,
        string
      >;
      type TouchNoticeItem = __UIComponent<fairygui.GComponent, { lblText: fairygui.GTextField }, string, string>;
      type SecondBillboardNoticeItem = __UIComponent<
        fairygui.GComponent,
        { bg: fairygui.GImage; bigHorn: fairygui.GImage; lblText: fairygui.GRichTextField },
        string,
        string
      >;
      type IncomeAttr = __UIComponent<fairygui.GComponent, { content: fairygui.GTextField }, string, "t0">;
      type IncomeItem = __UIComponent<
        fairygui.GComponent,
        {
          bg: fairygui.GImage;
          icon: fairygui.GLoader;
          title: fairygui.GTextField;
          itemName: fairygui.GTextField;
          xing: fairygui.GTextField;
          itemCount: fairygui.GTextField;
        },
        string,
        "t0"
      >;
      type FightPowerNoticeItem = __UIComponent<
        fairygui.GComponent,
        { zdlBg: fairygui.GImage; text_upVal: fairygui.GTextField; zdlObj: fairygui.GGraph },
        string,
        string
      >;
      type EffectItem = __UIComponent<fairygui.GComponent, { effectIcon: fairygui.GLoader }, string, string>;
      type PaoDianItem = __UIComponent<
        fairygui.GComponent,
        { title: fairygui.GImage; itemCount: fairygui.GTextField; paoDianCom: fairygui.GGroup },
        string,
        "trans"
      >;
      type NoticeSuitRender = __UIComponent<
        fairygui.GComponent,
        { iconBg: fairygui.GImage; loaderIcon: fairygui.GLoader },
        string,
        string
      >;
      type AttrNoticeJobItem = __UIComponent<fairygui.GComponent, { jobImg: fairygui.GLoader }, "jobState", string>;
      type AttrNoticeItem = __UIComponent<
        fairygui.GComponent,
        {
          imgAttr: fairygui.GLoader;
          imgjia: fairygui.GImage;
          jiantou: fairygui.GLoader;
          lblAttr: fairygui.GTextField;
          mbAttr: fairygui.GTextField;
          effectObj: fairygui.GGraph;
        },
        "special",
        string
      >;
      type comNineBillboard = __UIComponent<
        fairygui.GComponent,
        { loaderBg: fairygui.GLoader; lblText: fairygui.GTextField },
        string,
        string
      >;
    }
  }
  namespace NpcTransfer {
    type NpcTransferWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        rewardList: fairygui.GList;
        title: fairygui.GLoader;
        mapList: fairygui.GList;
        mapTxt: fairygui.GTextField;
        mapTxt2: fairygui.GTextField;
      },
      string,
      string
    >;
    type MapNPCWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        loaderTitle: fairygui.GLoader;
        listMap: fairygui.GList;
        listMapLevel: fairygui.GList;
        rewardList: fairygui.GList;
        txtLevelbg: fairygui.GTextField;
        txtLevel: fairygui.GTextField;
        txtTimebg: fairygui.GTextField;
        txtTime: fairygui.GTextField;
        txtDiffBg: fairygui.GTextField;
        txtDiff: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type NpcTransferRender = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type MapNpcLevelRender = __UIComponent<
        fairygui.GButton,
        { select: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type MapNpcRender = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
  }
  namespace NpcUp {}
  namespace NPCView {
    type NPCWindow = __UIComponent<
      fairygui.GComponent,
      { iconFrame: fairygui.GLoader; txtDesc: fairygui.GTextField; txtTitle: fairygui.GTextField },
      string,
      string
    >;
    type NPCCureWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonTipsClose;
        txtDesc: fairygui.GTextField;
        btnCure: NPCView.Button1;
        txtName: fairygui.GTextField;
      },
      string,
      string
    >;
    type Button1 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
  }
  namespace OfflineReward {
    type OfflineRewardWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnHelp: UILib.Components.button.ButtonHelp;
        rewardList: fairygui.GList;
        txtTime: fairygui.GTextField;
        btnFree: UILib.Components.button.Button2_Blue;
        btnDouble: UILib.Components.button.Button2_Orange;
        txtDouble: fairygui.GTextField;
        mapList: fairygui.GList;
      },
      string,
      string
    >;
    type OfflineRewardRender = __UIComponent<
      fairygui.GComponent,
      { txtName: fairygui.GTextField; txtLevel: fairygui.GTextField; txtMoney: fairygui.GTextField },
      "conSelect",
      string
    >;
  }
  namespace OpenAthletics {
    type OpenAthleticsWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderL: fairygui.GLoader;
        loaderR: fairygui.GLoader;
        iconFrame1: fairygui.GImage;
        iconFrame2: fairygui.GImage;
        iconFrame3: fairygui.GImage;
        iconBackRank: fairygui.GImage;
        loaderTitle: fairygui.GLoader;
        loaderFrameU: fairygui.GLoader;
        loaderIcon: fairygui.GLoader;
        loaderText: fairygui.GLoader;
        listType: fairygui.GList;
        comListL: OpenAthletics.components.comListL;
        comListR: OpenAthletics.components.comListR;
        btnRank: OpenAthletics.components.ButtonEquip;
        btnFunc: OpenAthletics.components.ButtonEquip;
        btnExplaneLv: OpenAthletics.components.ButtonEquip;
        btnEquip: OpenAthletics.components.ButtonEquip;
        txtTimeLast: fairygui.GTextField;
        txtSelfBg: fairygui.GTextField;
        txtSelf: fairygui.GTextField;
        txtExplanebg: fairygui.GTextField;
        txtExplane: fairygui.GTextField;
        txtDay: fairygui.GTextField;
      },
      string,
      string
    >;
    type OpenAthEquipWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        iconBack: fairygui.GImage;
        loaderTitle: fairygui.GLoader;
        loaderTitlebg: fairygui.GLoader;
        listLog: fairygui.GList;
        btnEquipL: UILib.Components.button.CheckBox1;
        btnEquipM: UILib.Components.button.CheckBox1;
        btnEquipR: UILib.Components.button.CheckBox1;
        txtExplane: fairygui.GRichTextField;
        txtEquipL: fairygui.GTextField;
        txtEquipM: fairygui.GTextField;
        txtScore: fairygui.GTextField;
      },
      string,
      string
    >;
    type AthleticsRankWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        listRank: fairygui.GList;
        txtRank: fairygui.GTextField;
        txtName: fairygui.GTextField;
        txtValName: fairygui.GTextField;
        txtSelf: fairygui.GTextField;
        loaderTtile: fairygui.GLoader;
      },
      string,
      string
    >;
    namespace components {
      type OpenAthTRender = __UIComponent<
        fairygui.GButton,
        {
          iconButton0: fairygui.GImage;
          iconButton1: fairygui.GImage;
          redPoint: fairygui.GImage;
          title: fairygui.GTextField;
        },
        "button",
        string
      >;
      type OpenAthRankRender = __UIComponent<
        fairygui.GComponent,
        {
          iconFrame: fairygui.GImage;
          iconBack: fairygui.GImage;
          listItem: fairygui.GList;
          txtRank: fairygui.GTextField;
          txtName: fairygui.GTextField;
          txtValue: fairygui.GTextField;
          txtCon: fairygui.GTextField;
        },
        string,
        string
      >;
      type OpenAthERender = __UIComponent<fairygui.GComponent, { txtLog: fairygui.GTextField }, string, string>;
      type comListR = __UIComponent<
        fairygui.GComponent,
        { mask: fairygui.GGraph; listReward: fairygui.GList },
        string,
        string
      >;
      type AthRankRender = __UIComponent<
        fairygui.GComponent,
        { txtRank: fairygui.GTextField; txtName: fairygui.GTextField; txtVal: fairygui.GTextField },
        string,
        string
      >;
      type OpenAthRewardRender = __UIComponent<
        fairygui.GComponent,
        {
          iconFrame: fairygui.GImage;
          iconBack: fairygui.GImage;
          iconReceive: fairygui.GImage;
          btnGet: UILib.Components.button.Button9;
          listItem: fairygui.GList;
          txtCondition: fairygui.GTextField;
          txtCount: fairygui.GTextField;
        },
        string,
        string
      >;
      type comListL = __UIComponent<
        fairygui.GComponent,
        { mask: fairygui.GGraph; listRank: fairygui.GList },
        string,
        string
      >;
      type ButtonEquip = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
  }
  namespace Pets {
    type PetsWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderR: fairygui.GLoader;
        title: fairygui.GLoader;
        bg: fairygui.GLoader;
        qidai: fairygui.GLoader;
        headList: fairygui.GList;
        loaderTitleBg: fairygui.GLoader;
        nameIcon: fairygui.GLoader;
        tabDi: fairygui.GLoader;
        tfList: fairygui.GList;
        sxBtn: Pets.Components.PetsTabRender;
        tfBtn: Pets.Components.PetsTabRender;
        lwBtn: Pets.Components.JiHuoBtn;
        jhBtn: UILib.Components.button.Button2_Orange;
        petsItemName: UILib.Components.button.ButtonText;
        xhGroup: fairygui.GGroup;
        curMoney: fairygui.GTextField;
        xianjia: fairygui.GGroup;
        xian: fairygui.GLoader;
        money: fairygui.GTextField;
        yuanjia: fairygui.GGroup;
        moneyGroup: fairygui.GGroup;
        petsObj: fairygui.GGraph;
        xhNum: fairygui.GTextField;
        kaifuNum: fairygui.GTextField;
        descTxt: fairygui.GTextField;
        timeStr: fairygui.GTextField;
        sxDi: fairygui.GLoader;
        magicIcon: fairygui.GLoader;
        sxList: fairygui.GList;
        sxDi1: fairygui.GImage;
        fight: fairygui.GTextField;
        carName: fairygui.GTextField;
        loaderBackDescL: fairygui.GLoader;
        loaderBackDescR: fairygui.GLoader;
        jieShao: fairygui.GTextField;
        explainBtn: UILib.Components.button.ButtonText;
        magicBtn: Pets.Components.Button1;
      },
      "tabState" | "isMoney" | "btnNameState" | "qdState",
      string
    >;
    namespace Components {
      type PetsHeadRender = __UIComponent<
        fairygui.GButton,
        {
          bg: fairygui.GLoader;
          petsIcon: fairygui.GLoader;
          bgSelect: fairygui.GLoader;
          petsIconName: fairygui.GLoader;
          jbIcon: fairygui.GLoader;
          redPoint: fairygui.GImage;
          zhezhao: fairygui.GImage;
          loaderR: fairygui.GLoader;
        },
        "button" | "huDu" | "suo",
        string
      >;
      type PetsTabRender = __UIComponent<
        fairygui.GButton,
        { an: fairygui.GLoader; liang: fairygui.GLoader; redPoint: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type ShuXRender = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type JiHuoBtn = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type PetsSJRender = __UIComponent<
        fairygui.GComponent,
        { yjh: fairygui.GLoader; xian: fairygui.GLoader; nameTxt: fairygui.GTextField; petsName: fairygui.GTextField },
        "jhState",
        string
      >;
      type PetsSkillRender = __UIComponent<
        fairygui.GButton,
        { bg: fairygui.GImage; icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace PKmiracle {
    namespace Component {
      type PKmiracleRender = __UIComponent<
        fairygui.GComponent,
        {
          imgBg: fairygui.GLoader;
          imgTxt1: fairygui.GLoader;
          imgTxt2: fairygui.GLoader;
          imgTxt3: fairygui.GTextField;
          txtPrice: fairygui.GTextField;
          roleInView: UILib.Components.roleInView.RoleInView;
          imgSel: fairygui.GImage;
          btnBuy: PKmiracle.Component.ButtonGet;
          tips: fairygui.GLoader;
          txt2: fairygui.GTextField;
          txt1: fairygui.GTextField;
        },
        string,
        string
      >;
      type ButtonGet = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ButtonAllGet = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
    type PKmiracleWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtTotalPrice: fairygui.GTextField;
        txtOldPrice: fairygui.GTextField;
        txtPrice: fairygui.GTextField;
        btnAllGet: PKmiracle.Component.ButtonAllGet;
        list: fairygui.GList;
        txtLast: fairygui.GTextField;
        close: UILib.Components.button.ButtonClose1;
        txtTime: fairygui.GTextField;
      },
      string,
      string
    >;
  }
  namespace PremiumOdds {
    type PremiumOddsWindow = __UIComponent<
      fairygui.GComponent,
      {
        imgIntro: fairygui.GLoader;
        item: UILib.Components.render.RewardRender1;
        list: fairygui.GList;
        imgFree: fairygui.GImage;
        btnBuy: PremiumOdds.Component.Button2;
        btnGet: PremiumOdds.Component.Button3;
        close: UILibFrame.Components.ButtonCloseBiz;
        count: fairygui.GTextField;
        imgFlag: fairygui.GImage;
        imgRmb: fairygui.GImage;
        txtPrice: fairygui.GTextField;
        imgDiamond: fairygui.GImage;
        group: fairygui.GGroup;
        txtTimes: fairygui.GTextField;
        txtOldPrice: fairygui.GTextField;
        txtNowPrice: fairygui.GTextField;
        txtExtra: fairygui.GTextField;
        groupTime: fairygui.GGroup;
        txtGiving: fairygui.GTextField;
        groupGiving: fairygui.GGroup;
      },
      "c1",
      string
    >;
    namespace Component {
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button2 = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type Button3 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type PremiumOddsRender = __UIComponent<
        fairygui.GButton,
        { imgNameB: fairygui.GLoader; imgNameL: fairygui.GLoader },
        "button",
        string
      >;
    }
  }
  namespace Privilege {
    type PrivilegeWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: Privilege.Components.CloseBtn;
        btnList: fairygui.GList;
        detailList: fairygui.GList;
        taskList: fairygui.GList;
        txt_des: fairygui.GTextField;
        awardList: fairygui.GList;
        btnGet: UILib.Components.button.Button2_Orange;
        btnPlay: Privilege.Components.Button1;
        btnMstq: Privilege.Components.Button2;
      },
      "btnCon" | "taskCon",
      string
    >;
    type PrivilegeBuyOutWindow = __UIComponent<
      fairygui.GComponent,
      {
        descList: fairygui.GList;
        rewardList: fairygui.GList;
        btnBuyOut: UILib.Components.button.Button2_Orange;
        txtCount: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type CloseBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type PrivilegeBtnRender = __UIComponent<
        fairygui.GButton,
        { titleDown: fairygui.GTextField; titleUp: fairygui.GTextField; imgRed: fairygui.GImage },
        "button",
        string
      >;
      type PrivilegeDetailRender = __UIComponent<
        fairygui.GButton,
        { txtContent: fairygui.GTextField },
        "button",
        string
      >;
      type PrivilegeTaskRender = __UIComponent<
        fairygui.GButton,
        {
          txtContent: fairygui.GTextField;
          txtCount: fairygui.GTextField;
          btnGo: Privilege.Components.GoBtn;
          imgYwc: fairygui.GLoader;
        },
        "button" | "conCom",
        string
      >;
      type GoBtn = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button2 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type PrivilegeBuyOutRender = __UIComponent<
        fairygui.GComponent,
        { txtContent: fairygui.GTextField },
        string,
        string
      >;
    }
  }
  namespace QDDiscountGift {
    type QDDiscountGiftWindow = __UIComponent<
      fairygui.GComponent,
      { list: fairygui.GList; txtTime: fairygui.GTextField; txtDesc: fairygui.GTextField },
      string,
      string
    >;
    type QDDiscountGiftRender = __UIComponent<
      fairygui.GComponent,
      {
        item: UILib.Components.render.RewardRender;
        imgDiscount: fairygui.GLoader;
        imgTitle: fairygui.GLoader;
        txtOldPrice: fairygui.GTextField;
        imgType1: fairygui.GLoader;
        txtPrice: fairygui.GTextField;
        imgType2: fairygui.GLoader;
        btnBuy: UILib.Components.button.Button11;
      },
      "conState",
      string
    >;
  }
  namespace QDExchange {
    type QDExchangeWindow = __UIComponent<
      fairygui.GComponent,
      { loaderDesc: fairygui.GLoader; list: fairygui.GList; txtCount: fairygui.GTextField },
      string,
      string
    >;
    namespace Components {
      type QDExchangeRender = __UIComponent<
        fairygui.GComponent,
        {
          item: UILib.Components.render.ItemCFGRender;
          txtName: fairygui.GTextField;
          btnExchange: UILib.Components.button.Button15;
          txtExchangeTimes: fairygui.GTextField;
          txtCost: fairygui.GTextField;
          txtItemCount: fairygui.GTextField;
          discountLoader: fairygui.GLoader;
        },
        "costIconCtrl" | "discountCon",
        string
      >;
    }
  }
  namespace QDRareFashion {
    namespace Component {
      type QDRareFahionSubRender = __UIComponent<
        fairygui.GComponent,
        {
          bg: fairygui.GLoader;
          song: fairygui.GLoader;
          txtDiamond: fairygui.GTextField;
          txtName: fairygui.GTextField;
          icon: UILib.Components.render.RewardRender;
          btnBuy: UILib.Components.button.Button11;
          isget: fairygui.GLoader;
        },
        string,
        string
      >;
    }
    type QDRareFashionWindow = __UIComponent<
      fairygui.GComponent,
      { txtTimes: fairygui.GTextField; txtDesc: fairygui.GTextField; list: fairygui.GList },
      string,
      string
    >;
    type QDRareFahionExtraWindow = __UIComponent<
      fairygui.GComponent,
      {
        song: fairygui.GLoader;
        roleInView: UILib.Components.roleInView.RoleInView;
        honorView: UILib.Components.roleInView.RoleInView;
      },
      string,
      string
    >;
  }
  namespace QDTreasure {
    type QDTreasureWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtTime: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        btnGo: QDTreasure.btnOpen;
        topList: fairygui.GList;
        bottomList: fairygui.GList;
      },
      string,
      string
    >;
    type btnOpen = __UIComponent<fairygui.GButton, {}, "button", string>;
    type QDTreasureRender = __UIComponent<
      fairygui.GComponent,
      { reward: UILib.Components.render.RewardRender },
      string,
      string
    >;
  }
  namespace QDTurnCard {
    type QDTurnCardWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtTime: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        bigList: fairygui.GList;
        samllList1: fairygui.GList;
        samllList2: fairygui.GList;
        txtCount: fairygui.GTextField;
        txtLogin: fairygui.GTextField;
        txtLoginCount: fairygui.GTextField;
        txtKill: fairygui.GTextField;
        txtKillCount: fairygui.GTextField;
        txtBuy: fairygui.GTextField;
        txtBuyCount: fairygui.GTextField;
        txtRecharge: fairygui.GTextField;
        txtRechargeCount: fairygui.GTextField;
        txtGo: fairygui.GRichTextField;
      },
      string,
      string
    >;
    type QDTurnCardSamllRender = __UIComponent<
      fairygui.GComponent,
      { imgWord: fairygui.GLoader; item: UILib.Components.render.RewardRender2; redPoint: fairygui.GImage },
      "conState",
      string
    >;
    type QDTurnCardRender = __UIComponent<
      fairygui.GComponent,
      { imgWord: fairygui.GLoader; item: UILib.Components.render.RewardRender2; redPoint: fairygui.GImage },
      "conState",
      string
    >;
    type QDTurnCardAlertWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtDesc: fairygui.GTextField;
        btnCancel: UILib.Components.button.Button2_Red;
        btnOk: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
    type QDTurnCardTipsWindow = __UIComponent<fairygui.GComponent, {}, string, string>;
  }
  namespace Qmdj {
    type QmdjWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtMoney: fairygui.GTextField;
        roleInView: UILib.Components.roleInView.RoleInView;
        imgGet: fairygui.GImage;
        btnCharge: Qmdj.Component.btnCharge;
        btnGet: Qmdj.Component.btnGet;
        imgname: fairygui.GLoader;
        btnR: UILib.Components.button.ButtonArrow;
        btnL: UILib.Components.button.ButtonArrow;
        txtTime: fairygui.GTextField;
        btnM: fairygui.GGraph;
        close: UILibFrame.Components.ButtonCloseBiz;
      },
      string,
      string
    >;
    namespace Component {
      type btnGet = __UIComponent<fairygui.GButton, {}, string, string>;
      type btnCharge = __UIComponent<fairygui.GButton, {}, string, string>;
    }
  }
  namespace Rank {
    type RankWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        roleInView: UILib.Components.roleInView.RoleInView;
        holyBeastList: fairygui.GList;
        listEquip: fairygui.GList;
        name: fairygui.GTextField;
        godList: fairygui.GList;
        relation: UILibFrame.Components.WindowRelationList;
      },
      string,
      string
    >;
    type RankFightWindow = __UIComponent<
      fairygui.GComponent,
      { rankList: fairygui.GList; txtMyRank: fairygui.GTextField },
      string,
      string
    >;
    type RankLevelWindow = __UIComponent<
      fairygui.GComponent,
      { rankList: fairygui.GList; txtMyRank: fairygui.GTextField },
      string,
      string
    >;
    type RankGangWindow = __UIComponent<
      fairygui.GComponent,
      { rankList: fairygui.GList; txtMyRank: fairygui.GTextField },
      string,
      string
    >;
    type RankDivinityWindow = __UIComponent<
      fairygui.GComponent,
      { rankList: fairygui.GList; txtMyRank: fairygui.GTextField },
      string,
      string
    >;
    type RankMenuWindow = __UIComponent<fairygui.GComponent, { list: fairygui.GList }, string, string>;
    type RankTalismanWindow = __UIComponent<
      fairygui.GComponent,
      { rankList: fairygui.GList; txtMyRank: fairygui.GTextField },
      string,
      string
    >;
    type RankWingWindow = __UIComponent<
      fairygui.GComponent,
      { rankList: fairygui.GList; txtMyRank: fairygui.GTextField },
      string,
      string
    >;
    type RankHorseWindow = __UIComponent<
      fairygui.GComponent,
      { rankList: fairygui.GList; txtMyRank: fairygui.GTextField },
      string,
      string
    >;
    type RankHaloWindow = __UIComponent<
      fairygui.GComponent,
      { rankList: fairygui.GList; txtMyRank: fairygui.GTextField },
      string,
      string
    >;
    type RankCrossSeverWindow = __UIComponent<
      fairygui.GComponent,
      { rankList: fairygui.GList; txtMyRank: fairygui.GTextField },
      string,
      string
    >;
    namespace Components {
      type btnSpecial = __UIComponent<fairygui.GButton, {}, "button", string>;
      type RankRender = __UIComponent<
        fairygui.GButton,
        {
          bgLoader: fairygui.GLoader;
          imgSign: fairygui.GLoader;
          txtName: fairygui.GTextField;
          txtValue: fairygui.GTextField;
          txtRank: fairygui.GTextField;
        },
        "button" | "bgCon",
        string
      >;
      type RankMultiParamRender = __UIComponent<
        fairygui.GButton,
        {
          bgLoader: fairygui.GLoader;
          imgSign: fairygui.GLoader;
          txtName: fairygui.GTextField;
          txtValue: fairygui.GTextField;
          txtRank: fairygui.GTextField;
        },
        "button" | "bgCon",
        string
      >;
      type RankCrossServerRender = __UIComponent<
        fairygui.GButton,
        {
          bgLoader: fairygui.GLoader;
          imgSign: fairygui.GLoader;
          txtName: fairygui.GTextField;
          txtValue: fairygui.GTextField;
          txtRank: fairygui.GTextField;
        },
        "button" | "bgCon",
        string
      >;
    }
  }
  namespace RankDiamond {
    type RankDiamondWindow = __UIComponent<
      fairygui.GComponent,
      {
        rankList: fairygui.GList;
        txtTotalDiamond: fairygui.GTextField;
        txtTodayDiamond: fairygui.GTextField;
        btnJump: UILib.Components.button.Button11;
        titleList: fairygui.GList;
        close: UILib.Components.button.ButtonClose1;
        txtDes: fairygui.GTextField;
      },
      string,
      string
    >;
    type RankDiamondRender = __UIComponent<
      fairygui.GComponent,
      {
        imgLoader: fairygui.GLoader;
        txtTopNum: fairygui.GTextField;
        txtNum: fairygui.GTextField;
        txtName: fairygui.GTextField;
        txtMoney: fairygui.GTextField;
        reward1: UILib.Components.render.RewardRenderSmall;
        reward2: UILib.Components.render.RewardRenderSmall;
      },
      string,
      string
    >;
    type RankDiamondTitleRender = __UIComponent<
      fairygui.GComponent,
      { txtDiamond: fairygui.GTextField; mod: fairygui.GGraph; yddLoader: fairygui.GLoader },
      string,
      string
    >;
  }
  namespace Recharge {
    type RechargeWindow = __UIComponent<
      fairygui.GComponent,
      { listMoney: fairygui.GList; btnDown: Recharge.components.ButtonDown; btnUp: Recharge.components.ButtonUp },
      string,
      string
    >;
    type PaymentWindow = __UIComponent<
      fairygui.GComponent,
      { relation: UILibFrame.Components.WindowRelationList2; close: UILib.Components.button.ButtonClose1 },
      string,
      string
    >;
    type ContinuousChargingWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtCharge: fairygui.GTextField;
        btnCharge: UILib.Components.button.Button11;
        list: fairygui.GList;
        seven: Recharge.components.ContinuousChargingRender;
        btnFree: Recharge.components.ButtonFreeAward;
      },
      string,
      string
    >;
    type LifelongWindow = __UIComponent<
      fairygui.GComponent,
      {
        roleInView: UILib.Components.roleInView.RoleInView;
        imgIntro: fairygui.GLoader;
        txtCharge: fairygui.GTextField;
        btnCharge: UILib.Components.button.Button11;
        listAward: fairygui.GList;
        txtName: fairygui.GTextField;
        list: fairygui.GList;
        imgGet: fairygui.GImage;
        btnLeft: Recharge.components.ButtonLeft;
        btnRight: Recharge.components.ButtonRight;
      },
      string,
      string
    >;
    type EverydayWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnCharge: UILib.Components.button.Button11;
        txtCharge: fairygui.GTextField;
        list: fairygui.GList;
        btnDown: Recharge.components.ButtonDown;
        btnUp: Recharge.components.ButtonUp;
      },
      string,
      string
    >;
    type DiamondCardWindow = __UIComponent<fairygui.GComponent, { cardList: fairygui.GList }, string, string>;
    namespace components {
      type RechargeRender = __UIComponent<
        fairygui.GComponent,
        {
          txtDiamond: fairygui.GTextField;
          txtMoney: fairygui.GTextField;
          imgFlag: fairygui.GImage;
          txtDragon: fairygui.GTextField;
          imgIcon: fairygui.GLoader;
        },
        string,
        string
      >;
      type ButtonGet = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ContinuousChargingRender = __UIComponent<
        fairygui.GComponent,
        {
          item: UILib.Components.render.RewardRender2;
          txtName: fairygui.GTextField;
          btnGet: Recharge.components.ButtonGet;
          imgGet: fairygui.GImage;
          txtDay: fairygui.GTextField;
        },
        string,
        string
      >;
      type LifelongRender = __UIComponent<
        fairygui.GButton,
        { img: fairygui.GLoader; txtMoney: fairygui.GTextField },
        "button",
        string
      >;
      type ButtonLeft = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonRight = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonUp = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonDown = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonFreeAward = __UIComponent<fairygui.GButton, { red: fairygui.GImage }, "button", string>;
      type EverydayRender = __UIComponent<
        fairygui.GComponent,
        {
          txtMoney: fairygui.GTextField;
          btnGet: UILib.Components.button.Button14;
          imgGet: fairygui.GImage;
          list: fairygui.GList;
        },
        string,
        string
      >;
      type DiamondCardRender = __UIComponent<
        fairygui.GComponent,
        {
          imgBg: fairygui.GLoader;
          imgMark: fairygui.GLoader;
          descList: fairygui.GList;
          txtDay: fairygui.GTextField;
          rewardList: fairygui.GList;
          btnBuy: UILib.Components.button.Button111;
          btnGet: UILib.Components.button.Button111;
        },
        "conState",
        string
      >;
      type DiamondCardTxtRender = __UIComponent<
        fairygui.GComponent,
        { imgPoint: fairygui.GLoader; txtDesc: fairygui.GTextField },
        string,
        string
      >;
      type ButtonClose = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonL = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonR = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace RecycleEffect {
    namespace Components {
      type ExpNumberContiner = __UIComponent<fairygui.GComponent, { numList: fairygui.GList }, string, string>;
    }
    type RecycleAddCoinView = __UIComponent<
      fairygui.GComponent,
      { animHolder: fairygui.GGraph; numContiner: RecycleEffect.Components.ExpNumberContiner; group: fairygui.GGroup },
      string,
      "t0"
    >;
    type RecycleAddDiamondView = __UIComponent<
      fairygui.GComponent,
      { animHolder: fairygui.GGraph; numContiner: RecycleEffect.Components.ExpNumberContiner; group: fairygui.GGroup },
      string,
      string
    >;
    namespace Render {
      type RecycleCoinRender = __UIComponent<fairygui.GButton, { numTxt: fairygui.GTextField }, string, "trans">;
      type RecycleDimaondRenderer = __UIComponent<
        fairygui.GButton,
        { numTxt: fairygui.GTextField },
        string,
        "trans" | "t1"
      >;
    }
  }
  namespace RedName {
    type RedNameWindow = __UIComponent<
      fairygui.GComponent,
      {
        item: UILib.Components.render.RewardRender;
        close: UILib.Components.button.ButtonClose2;
        btnClear: RedName.Button1;
        txt_pkVal: fairygui.GTextField;
      },
      "stateCtrl",
      string
    >;
    type Button1 = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
  }
  namespace Renew {
    type RenewWindow = __UIComponent<
      fairygui.GComponent,
      {
        di: fairygui.GLoader;
        renewView: Renew.Components.ReNewCom;
        itemList: fairygui.GList;
        btnLq: UILib.Components.button.Button2_Orange;
        textMonth: fairygui.GTextField;
        textDay: fairygui.GTextField;
      },
      "isState",
      string
    >;
    namespace Components {
      type ReNewCom = __UIComponent<fairygui.GComponent, { descTxt: fairygui.GRichTextField }, string, string>;
    }
  }
  namespace ResourceBack {
    type ResourceBackWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnFree: UILib.Components.button.Button2_Blue;
        btnCost: UILib.Components.button.Button2_Orange;
        btnHelp: UILibFrame.Components.ButtonHelp;
      },
      string,
      string
    >;
    namespace Components {
      type ResourceBackRender = __UIComponent<
        fairygui.GComponent,
        {
          iconTask: fairygui.GLoader;
          iconTxt: fairygui.GLoader;
          list1: fairygui.GList;
          txtCount: fairygui.GTextField;
          btnFree: UILib.Components.button.Button2_Blue;
          btnCost: UILib.Components.button.Button2_Orange;
          group: fairygui.GGroup;
          isGet: fairygui.GImage;
          imgEmpty: fairygui.GImage;
        },
        string,
        string
      >;
    }
  }
  namespace RewardHall {
    type RewardHallWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        titleIcon: fairygui.GLoader;
        relation: RewardHall.Components.WinRelationList;
      },
      string,
      string
    >;
    namespace Components {
      type WinRelationList = __UIComponent<fairygui.GComponent, { listBtn: fairygui.GList }, string, string>;
    }
  }
  namespace RewardOnLine {
    type RewardOnLineWindow = __UIComponent<
      fairygui.GComponent,
      { bg: fairygui.GLoader; list: fairygui.GList; txtTime: fairygui.GTextField },
      string,
      string
    >;
    namespace Components {
      type RewardOnLineRender = __UIComponent<
        fairygui.GComponent,
        {
          bg: fairygui.GLoader;
          titleBg: fairygui.GLoader;
          listItem: fairygui.GList;
          loaderEnd: fairygui.GLoader;
          txtOnline: fairygui.GTextField;
          txtLastTime: fairygui.GTextField;
          btnGet: UILib.Components.button.Button2_Orange;
        },
        "conState",
        string
      >;
    }
  }
  namespace Role {
    type RoleWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        relation: UILibFrame.Components.WindowRelationList;
        loaderTitle: fairygui.GLoader;
      },
      string,
      string
    >;
    type RoleShowWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        roleEquip: RoleAttr.Components.RoleShowEquipView;
        roleAttr: RoleAttr.Components.RoleShowAttrsView;
      },
      string,
      string
    >;
  }
  namespace RoleAttr {
    type RoleAttrWindow = __UIComponent<
      fairygui.GComponent,
      { roleAttr: RoleAttr.Components.RoleAttrView; roleEquip: RoleAttr.Components.RoleEquipView },
      "hasJob",
      string
    >;
    type RoleSpecialAttrWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrameTwo; tabList: fairygui.GList; attrList: fairygui.GList },
      string,
      string
    >;
    type RoleHolyEquipWindow = __UIComponent<
      fairygui.GComponent,
      { holyView: RoleAttr.Components.RoleHolyView; roleAttr: RoleAttr.Components.RoleAttrView },
      string,
      string
    >;
    type RoleShowAttrWindow = __UIComponent<
      fairygui.GComponent,
      { roleEquip: RoleAttr.Components.RoleShowEquipView; roleAttr: RoleAttr.Components.RoleShowAttrsView },
      string,
      string
    >;
    type RoleEquipWishWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtName: fairygui.GTextField;
        attrList: fairygui.GList;
        txtDesc: fairygui.GTextField;
        txtActivate: fairygui.GTextField;
        txtGetDesc: fairygui.GTextField;
      },
      string,
      string
    >;
    type RoleCZEquipWindow = __UIComponent<
      fairygui.GComponent,
      { roleCZEquip: RoleAttr.Components.RoleCZView; roleAttr: RoleAttr.Components.RoleAttrView },
      string,
      string
    >;
    type RoleJJEquipWindow = __UIComponent<
      fairygui.GComponent,
      {
        roleInView: UILib.Components.roleInView.RoleInView;
        listEquip: fairygui.GList;
        item1: UILib.Components.render.ItemCFGRender;
        item2: UILib.Components.render.ItemCFGRender;
        txtLastName: fairygui.GTextField;
        txtName: fairygui.GTextField;
        costList: fairygui.GList;
        name: fairygui.GTextField;
        btnUpgrade: UILib.Components.button.Button3_yellow;
        btnGet: UILib.Components.button.Button3_yellow;
        txtFight: fairygui.GTextField;
      },
      "conState",
      string
    >;
    type RoleSMEquipWindow = __UIComponent<
      fairygui.GComponent,
      { roleSMEquip: RoleAttr.Components.RoleSMView; roleAttr: RoleAttr.Components.RoleAttrView },
      string,
      string
    >;
    namespace Components {
      type RoleAttrView = __UIComponent<
        fairygui.GComponent,
        {
          txtFight: fairygui.GTextField;
          attrs: RoleAttr.Components.RoleAttrMiddle;
          btnSpecial: RoleAttr.Components.RoleAttrDetailsBtn;
        },
        string,
        string
      >;
      type hpBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type expBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type RoleAttrMiddle = __UIComponent<
        fairygui.GComponent,
        {
          baseAttrList: fairygui.GList;
          specialAttrList: fairygui.GList;
          txtJob: fairygui.GTextField;
          txtPk: fairygui.GTextField;
          txtLv: fairygui.GTextField;
          expBar: RoleAttr.Components.expBar;
          txtExp: fairygui.GTextField;
        },
        string,
        string
      >;
      type PromoteBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type RoleAttrRender = __UIComponent<
        fairygui.GComponent,
        { attrName: fairygui.GTextField; attrValue: fairygui.GTextField },
        string,
        string
      >;
      type RoleEquipView = __UIComponent<
        fairygui.GComponent,
        {
          roleInView: UILib.Components.roleInView.RoleInView;
          holyBeastList: fairygui.GList;
          listEquip: fairygui.GList;
          name: fairygui.GTextField;
          btn_1: RoleAttr.Components.roleEquipTab;
          btn_2: RoleAttr.Components.roleEquipTab;
          btn_3: RoleAttr.Components.roleEquipTab;
          btn_4: RoleAttr.Components.roleEquipTab;
          btn_5: RoleAttr.Components.roleEquipTab;
          btnWish: RoleAttr.Components.btnWish;
          godList: fairygui.GList;
        },
        "conEquip",
        string
      >;
      type roleEquipTab = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; red: fairygui.GImage },
        "button",
        string
      >;
      type RoleSpecialAttrRender = __UIComponent<
        fairygui.GComponent,
        { bg: fairygui.GImage; attr1: fairygui.GTextField; attr2: fairygui.GTextField },
        string,
        string
      >;
      type RoleHolyView = __UIComponent<
        fairygui.GComponent,
        {
          listEquip: fairygui.GList;
          btnUpgrade: UILib.Components.button.Button11;
          curAttrList: fairygui.GList;
          nextAttrList: fairygui.GList;
          itemList: fairygui.GList;
          nextItem: UILib.Components.render.ItemCFGRender;
          curItem: UILib.Components.render.EquipRender;
        },
        "conState",
        string
      >;
      type RoleHolyAttrRender = __UIComponent<
        fairygui.GComponent,
        { attrName: fairygui.GTextField; attrValue: fairygui.GTextField },
        string,
        string
      >;
      type RoleHolyItemRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.ItemCFGRender; costNum: fairygui.GTextField },
        string,
        string
      >;
      type RoleHolyEquipRender = __UIComponent<
        fairygui.GButton,
        { equip: UILib.Components.render.EquipRender; iconSel: fairygui.GImage; imgUp: fairygui.GImage },
        "button",
        string
      >;
      type btnSpecial = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type RoleShowEquipView = __UIComponent<
        fairygui.GComponent,
        {
          roleInView: UILib.Components.roleInView.RoleInView;
          holyBeastList: fairygui.GList;
          listEquip: fairygui.GList;
          name: fairygui.GTextField;
          btn_1: RoleAttr.Components.roleEquipTab;
          btn_2: RoleAttr.Components.roleEquipTab;
          btn_3: RoleAttr.Components.roleEquipTab;
          btn_4: RoleAttr.Components.roleEquipTab;
          btn_5: RoleAttr.Components.roleEquipTab;
          godList: fairygui.GList;
        },
        "conEquip",
        string
      >;
      type RoleShowAttrsView = __UIComponent<
        fairygui.GComponent,
        { mark: fairygui.GGraph; txtFight: fairygui.GTextField; attrs: RoleAttr.Components.RoleAttrMiddle },
        string,
        string
      >;
      type btnWish = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type WishAttrRender = __UIComponent<
        fairygui.GComponent,
        { attrName: fairygui.GTextField; attrValue: fairygui.GTextField },
        string,
        string
      >;
      type RoleCZView = __UIComponent<
        fairygui.GComponent,
        {
          listEquip: fairygui.GList;
          item10: UILib.Components.render.EquipRender;
          item11: UILib.Components.render.EquipRender;
        },
        string,
        string
      >;
      type RoleJJCostRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.ItemCFGRender; num: fairygui.GTextField },
        string,
        string
      >;
      type RoleJJEquipRender = __UIComponent<
        fairygui.GButton,
        { equip: UILib.Components.render.EquipRender; iconSel: fairygui.GImage; imgUp: fairygui.GImage },
        "button",
        string
      >;
      type RoleSMView = __UIComponent<
        fairygui.GComponent,
        { godList: fairygui.GList; devillList: fairygui.GList },
        string,
        string
      >;
      type RoleAttrDetailsBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace RoleMenu {
    type RoleMenuWindow = __UIComponent<
      fairygui.GComponent,
      {
        bg: fairygui.GImage;
        headIcon: fairygui.GLoader;
        funcList: fairygui.GList;
        RoleName: fairygui.GTextField;
        RoleGang: fairygui.GTextField;
        RoleLv: fairygui.GTextField;
        close: UILibFrame.Components.ButtonClose;
      },
      string,
      string
    >;
    type MenuItem = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
  }
  namespace RoleRelive {
    namespace Compentens {
      type comRelive3 = __UIComponent<
        fairygui.GComponent,
        {
          btn_huiChengRelive: RoleRelive.Compentens.Button1;
          txtType: fairygui.GTextField;
          txtTime: fairygui.GRichTextField;
        },
        string,
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type comRelive4 = __UIComponent<
        fairygui.GComponent,
        { btn_yingDiRelive: RoleRelive.Compentens.Button1; txtType: fairygui.GTextField },
        string,
        string
      >;
      type comRelive5 = __UIComponent<
        fairygui.GComponent,
        { btn_guangChangRelive: RoleRelive.Compentens.Button1; txtType: fairygui.GTextField },
        string,
        string
      >;
      type comRelive1 = __UIComponent<
        fairygui.GComponent,
        {
          btn_selfRelive: RoleRelive.Compentens.Button1;
          iconTitle: fairygui.GImage;
          txtType: fairygui.GTextField;
          txtTime: fairygui.GTextField;
        },
        string,
        string
      >;
      type comRelive2 = __UIComponent<
        fairygui.GComponent,
        {
          btn_fullRelive: RoleRelive.Compentens.Button1;
          title: fairygui.GImage;
          iconMoney: fairygui.GImage;
          txtReliveType: fairygui.GTextField;
          txtCountbg: fairygui.GTextField;
          txtCount: fairygui.GTextField;
          txtcostNum: fairygui.GTextField;
        },
        "reliveCount",
        string
      >;
    }
    type RoleReliveNormalWindow = __UIComponent<
      fairygui.GComponent,
      {
        comReliveNormal1: RoleRelive.Compentens.comRelive1;
        comReliveNormal2: RoleRelive.Compentens.comRelive2;
        txtKiller: fairygui.GRichTextField;
      },
      "conFull",
      string
    >;
    type RoleReliveWindow = __UIComponent<fairygui.GComponent, {}, string, string>;
    type RoleReliveGongChengWindow = __UIComponent<
      fairygui.GComponent,
      {
        iconKillerBg: fairygui.GImage;
        gCRelive: RoleRelive.Compentens.comRelive5;
        yingDiRelive: RoleRelive.Compentens.comRelive4;
        huiChengRelive: RoleRelive.Compentens.comRelive3;
        txtKiller: fairygui.GRichTextField;
      },
      string,
      string
    >;
    type RoleReliveZszzWindow = __UIComponent<
      fairygui.GComponent,
      { comRelive: RoleRelive.Compentens.comRelive1 },
      string,
      string
    >;
    type RoleReliveDiGuoWindow = __UIComponent<
      fairygui.GComponent,
      {
        iconKillerBg: fairygui.GImage;
        btnRelive2: UILib.Components.button.Button2_Orange;
        btnRelive1: UILib.Components.button.Button2_Orange;
        btnRelive3: UILib.Components.button.Button2_Orange;
        txtKiller: fairygui.GRichTextField;
        txtTime: fairygui.GRichTextField;
      },
      string,
      string
    >;
    type RoleReliveXueFanWindow = __UIComponent<
      fairygui.GComponent,
      {
        iconKillerBg: fairygui.GImage;
        comRelive: RoleRelive.Compentens.comRelive3;
        txtKiller: fairygui.GRichTextField;
      },
      string,
      string
    >;
    type RoleReliveWczbWindow = __UIComponent<
      fairygui.GComponent,
      { comRelive: RoleRelive.Compentens.comRelive1 },
      string,
      string
    >;
  }
  namespace RoleTips {
    type RoleSelectTipWindow = __UIComponent<
      fairygui.GComponent,
      {
        bg: fairygui.GImage;
        headIcon: fairygui.GLoader;
        list: fairygui.GList;
        RoleName: fairygui.GTextField;
        RoleGang: fairygui.GTextField;
        RoleLv: fairygui.GTextField;
        close: UILibFrame.Components.ButtonClose;
      },
      string,
      string
    >;
    type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
  }
  namespace Sale {
    type SaleWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrame; relation: UILibFrame.Components.WindowRelationList },
      string,
      string
    >;
    type SaleHallWindow = __UIComponent<
      fairygui.GComponent,
      {
        typeList: fairygui.GList;
        saleList: fairygui.GList;
        searchName: fairygui.GTextField;
        btnSearch: Sale.Components.Button1;
        txt_money: fairygui.GTextField;
        btnSortTime: UILib.Components.button.ButtonArrow1;
        btnSortPrice: UILib.Components.button.ButtonArrow1;
        btnAdd: UILib.Components.button.ButtonAdd3;
        btnQuestion: UILib.Components.button.ButtonHelp;
        btnPrompt: UILib.Components.button.Button111;
      },
      string,
      string
    >;
    type SaleMyWindow = __UIComponent<
      fairygui.GComponent,
      {
        myList: fairygui.GList;
        txt_leftCount: fairygui.GTextField;
        bagList: fairygui.GList;
        btnSortTime: UILib.Components.button.ButtonArrow1;
        btnSortPrice: UILib.Components.button.ButtonArrow1;
        moneyList: fairygui.GList;
      },
      string,
      string
    >;
    type SaleGetWindow = __UIComponent<fairygui.GComponent, { getList: fairygui.GList }, string, string>;
    type SaleSearchWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        btnSearch: UILib.Components.button.Button2_Blue;
        btnReset: UILib.Components.button.Button2_Orange;
        combo_coin: UILib.Components.combobox.ComboBox1;
        combo_quality: UILib.Components.combobox.ComboBox1;
        input_name: fairygui.GTextField;
        input_rank_min: fairygui.GTextField;
        input_rank_max: fairygui.GTextField;
        input_price_min: fairygui.GTextField;
        input_price_max: fairygui.GTextField;
      },
      string,
      string
    >;
    type SaleSellWindow = __UIComponent<
      fairygui.GComponent,
      {
        bg: fairygui.GImage;
        curItem: UILib.Components.render.BagRender;
        txt_tax: fairygui.GTextField;
        input_totall_price: fairygui.GTextField;
        input_cost: fairygui.GTextField;
        curItemName: fairygui.GTextField;
        input_num: fairygui.GTextField;
        input_single_price: fairygui.GTextField;
        btnSale: UILib.Components.button.Button6;
        btnMin: UILib.Components.button.ButtonMinus;
        btnMax: UILib.Components.button.ButtonMax;
        btnAdd: UILib.Components.button.ButtonAdd;
        close: UILibFrame.Components.ButtonTipsClose;
      },
      string,
      string
    >;
    type SaleBuyWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        item: UILib.Components.render.BagRender;
        txt_name: fairygui.GTextField;
        txt_price: fairygui.GTextField;
        btnOk: UILib.Components.button.Button2_Orange;
        btnCancel: UILib.Components.button.Button2_Red;
      },
      string,
      string
    >;
    type SalePromptWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameBg;
        promptList: fairygui.GList;
        btnAllSel: UILib.Components.button.CheckBox1;
        btnAllCancel: UILib.Components.button.CheckBox1;
      },
      string,
      string
    >;
    type SalePromptRender = __UIComponent<
      fairygui.GComponent,
      { txtName: fairygui.GTextField; btnCheck: UILib.Components.button.CheckBox1 },
      string,
      string
    >;
    type SaleSellMoneyWindow = __UIComponent<
      fairygui.GComponent,
      {
        bg: fairygui.GImage;
        input_totall_price: fairygui.GTextField;
        input_cost: fairygui.GTextField;
        curItemName: fairygui.GTextField;
        input_num: fairygui.GTextField;
        input_single_price: fairygui.GTextField;
        btnSale: UILib.Components.button.Button6;
        btnMin: UILib.Components.button.ButtonMinus;
        btnMax: UILib.Components.button.ButtonMax;
        btnAdd: UILib.Components.button.ButtonAdd;
        close: UILibFrame.Components.ButtonTipsClose;
        curItem: UILib.Components.render.ItemCFGRender;
        txt_tax: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type SaleRecordRender = __UIComponent<
        fairygui.GComponent,
        {
          attrType: fairygui.GLoader;
          item: UILib.Components.render.BagRender;
          txt_price: fairygui.GTextField;
          txt_name: fairygui.GTextField;
          txt_time: fairygui.GTextField;
        },
        string,
        string
      >;
      type SaleGetRender = __UIComponent<
        fairygui.GComponent,
        {
          attrType: fairygui.GLoader;
          item: UILib.Components.render.BagRender;
          btnGet: UILib.Components.button.Button6;
          txt_price: fairygui.GTextField;
          txt_name: fairygui.GTextField;
          txt_time: fairygui.GTextField;
        },
        string,
        string
      >;
      type SaleMyRender = __UIComponent<
        fairygui.GComponent,
        {
          bgLoader: fairygui.GLoader;
          item: UILib.Components.render.BagRender;
          btnGet: UILib.Components.button.Button6;
          btnChat: UILib.Components.button.Button6;
          txt_time: fairygui.GTextField;
          txt_name: fairygui.GTextField;
          txt_price: fairygui.GTextField;
          txt_total_price: fairygui.GTextField;
          attrType1: fairygui.GImage;
          attrType: fairygui.GImage;
        },
        string,
        string
      >;
      type SaleHallRender = __UIComponent<
        fairygui.GComponent,
        {
          bgLoader: fairygui.GLoader;
          item: UILib.Components.render.BagRender;
          txt_price: fairygui.GTextField;
          txt_name: fairygui.GTextField;
          txt_time: fairygui.GTextField;
          txt_total_price: fairygui.GTextField;
          btnGet: UILib.Components.button.Button6;
          attrType1: fairygui.GImage;
          attrType: fairygui.GImage;
        },
        string,
        string
      >;
      type SaleTypeRender = __UIComponent<
        fairygui.GButton,
        { clickItem: fairygui.GLoader; subTypeList: fairygui.GList; title: fairygui.GTextField },
        "button",
        string
      >;
      type SaleSubTypeRender = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type SaleTab = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type SaleMoneyRender = __UIComponent<
        fairygui.GButton,
        { bgLoader: fairygui.GLoader; bgSLoader: fairygui.GLoader },
        "button",
        string
      >;
    }
  }
  namespace SceneView {
    namespace Views.treasureMap {
      type TreasureMapSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          bg: SceneView.Compontents.LeftBgCom;
          itemList: fairygui.GList;
          baozNum: fairygui.GTextField;
          timeTxt: fairygui.GTextField;
          btnBuy: UILib.Components.button.Button12;
          btnExit: UILib.Components.button.ButtonExit;
          group: fairygui.GGroup;
        },
        "openState",
        string
      >;
      type TreasureMapSceneRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.RewardRender; img: fairygui.GLoader },
        "getState",
        string
      >;
      type TreasureMapRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.RewardRender; img: fairygui.GLoader },
        "getState",
        string
      >;
    }
    namespace Views.mainEscort {
      type MainEscortView = __UIComponent<
        fairygui.GComponent,
        { view: SceneView.Views.mainEscort.EscortView; btnOpen: MainUI.Components.MiddleLeft.BtnOpen },
        "openState",
        string
      >;
      type EscortView = __UIComponent<
        fairygui.GComponent,
        {
          iconFrame: SceneView.Compontents.LeftBgCom;
          txtTime: fairygui.GTextField;
          btnEnter: UILib.Components.button.Button12;
          btnGiveUp: UILib.Components.button.Button13;
          loaderName: fairygui.GLoader;
          btnSave: SceneView.Compontents.ButtonSave;
          listItem: fairygui.GList;
        },
        string,
        string
      >;
    }
    namespace Views.exp {
      type ExpCopySceneView = __UIComponent<
        fairygui.GComponent,
        {
          info: SceneView.Views.exp.ExpInfoView;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          actionBtn: SceneView.Views.exp.ActionBtn;
          mainTaskactionBtn: SceneView.Views.exp.ActionBtn;
          multiple3: SceneView.Views.exp.ActionBtn;
          cost3: fairygui.GTextField;
          group3: fairygui.GGroup;
          multiple5: SceneView.Views.exp.ActionBtn;
          cost5: fairygui.GTextField;
          group5: fairygui.GGroup;
          exp: fairygui.GTextField;
        },
        "openState" | "c1",
        string
      >;
      type ExpInfoView = __UIComponent<
        fairygui.GComponent,
        {
          titleIcon: fairygui.GLoader;
          count: fairygui.GTextField;
          time: fairygui.GTextField;
          maxExp: fairygui.GTextField;
          Multiple: fairygui.GTextField;
        },
        string,
        string
      >;
      type ButtonTxt = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ActionBtn = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
    }
    namespace Views.bossExclusive {
      type BossExclusiveSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: SceneView.Compontents.BtnOpen;
          btnExit: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          itemList: fairygui.GList;
          taskName: fairygui.GTextField;
          timeTxt: fairygui.GTextField;
          copyGroup: fairygui.GGroup;
          group: fairygui.GGroup;
        },
        "openState" | "timeState",
        string
      >;
    }
    namespace Views.relevel {
      type RelevelCopySceneView = __UIComponent<
        fairygui.GComponent,
        {
          info: SceneView.Views.relevel.RelevelInfoView;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
        },
        "openState",
        string
      >;
      type RelevelInfoView = __UIComponent<
        fairygui.GComponent,
        {
          titleIcon: fairygui.GLoader;
          count: fairygui.GTextField;
          timeStr: fairygui.GTextField;
          rewardList: fairygui.GList;
        },
        string,
        string
      >;
    }
    namespace Views.gem {
      type GemCopySceneView = __UIComponent<
        fairygui.GComponent,
        {
          info: SceneView.Views.gem.GemInfoView;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
        },
        "openState",
        string
      >;
      type GemInfoView = __UIComponent<
        fairygui.GComponent,
        {
          titleIcon: fairygui.GLoader;
          target: fairygui.GTextField;
          count: fairygui.GTextField;
          timeStr: fairygui.GTextField;
          rewardList: fairygui.GList;
        },
        string,
        string
      >;
    }
    namespace Views.jobSecret {
      type JobSecretSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          btnExit: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          progress: SceneView.Compontents.ProgressBar1;
          titleIcon: fairygui.GLoader;
          btnRank: SceneView.Compontents.ButtonRank;
          btnReward: SceneView.Compontents.ButtonReward;
          rewardList: fairygui.GList;
          txt_timeDesc: fairygui.GTextField;
          txt_task: fairygui.GTextField;
          txt_time: fairygui.GTextField;
          txt_rank: fairygui.GTextField;
          txt_damage: fairygui.GTextField;
          txt_bo: fairygui.GTextField;
          txtBlood: fairygui.GTextField;
          group: fairygui.GGroup;
        },
        "openState" | "stateCtrl",
        string
      >;
    }
    namespace Views.magicYuan {
      type MagicYuanSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          goTzBtn: UILib.Components.button.Button2_Orange;
          itemList: fairygui.GList;
          taskName: fairygui.GTextField;
          timeTxt: fairygui.GTextField;
          copyGroup: fairygui.GGroup;
          cengNum: fairygui.GTextField;
          group: fairygui.GGroup;
        },
        "openState" | "isBtnState",
        string
      >;
    }
    namespace Views.shacheng {
      type ShaChengCopySceneView = __UIComponent<
        fairygui.GComponent,
        {
          info: SceneView.Views.shacheng.ShaChengInfoView;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
        },
        "openState",
        string
      >;
      type ShaChengInfoView = __UIComponent<
        fairygui.GComponent,
        {
          titleIcon: fairygui.GLoader;
          timeStr: fairygui.GTextField;
          leaderCount: fairygui.GTextField;
          enemyCount: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Views.HuanJing {
      type HuanJingSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          btnLeave: SceneView.Compontents.BtnExit;
          iconFrame: SceneView.Compontents.LeftBgCom;
          loaderTitle: fairygui.GLoader;
          listItem: fairygui.GList;
          progress: SceneView.Compontents.ProgressBar1;
          txtConditionBg: fairygui.GTextField;
          txtBossBg: fairygui.GTextField;
          txtCondition: fairygui.GRichTextField;
          txtBoss: fairygui.GTextField;
          txtTime: fairygui.GTextField;
          loaderTime: fairygui.GLoader;
          txtTimeF: fairygui.GTextField;
        },
        "conExit" | "openState",
        string
      >;
    }
    namespace Views.rebirthBoss {
      type RebirthBossSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          zdBtn: UILib.Components.button.Button6;
          bar: SceneView.Compontents.ProgressBar1;
          taskName: fairygui.GTextField;
          gsTxt: fairygui.GTextField;
          txtBg: fairygui.GTextField;
          copyGroup: fairygui.GGroup;
          cengNum: fairygui.GTextField;
          group: fairygui.GGroup;
          timeFont: fairygui.GTextField;
          endGroup: fairygui.GGroup;
        },
        "openState" | "endState",
        string
      >;
    }
    namespace Views.shenDunBoss {
      type ShenDunBossSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          goBox: UILib.Components.button.ButtonText;
          taskName: fairygui.GTextField;
          phTxt: fairygui.GTextField;
          hurtTxt: fairygui.GTextField;
          boxGroup: fairygui.GGroup;
          time: fairygui.GTextField;
          ckPh: SceneView.Compontents.ButtonRank;
          ckReward: SceneView.Compontents.ButtonReward;
          dhjl: SceneView.Views.shenDunBoss.Button5;
          copyGroup: fairygui.GGroup;
          iconArrow2: SceneView.Views.shenDunBoss.Button6;
          listPage: fairygui.GList;
          iconArrow1: SceneView.Views.shenDunBoss.Button6;
          itemList: fairygui.GList;
          group: fairygui.GGroup;
          timeFont: fairygui.GTextField;
          endGroup: fairygui.GGroup;
        },
        "openState" | "boxState" | "endState" | "pageCtrl",
        string
      >;
      type Button5 = __UIComponent<fairygui.GButton, { dhjl: fairygui.GRichTextField }, "button", string>;
      type Button6 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
    namespace Views.mjLieFeng {
      type MJLieFengSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          buyBtn: UILib.Components.button.Button6;
          bodyNum: fairygui.GTextField;
          lblDesc: fairygui.GTextField;
          itemList: fairygui.GList;
          copyGroup: fairygui.GGroup;
          group: fairygui.GGroup;
        },
        "openState",
        string
      >;
    }
    namespace Views.hunLuanSy {
      type HunLuanSySceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          list: fairygui.GList;
          goReward: SceneView.Compontents.ButtonReward;
          time: fairygui.GTextField;
          group: fairygui.GGroup;
          timeFont: fairygui.GTextField;
          endGroup: fairygui.GGroup;
        },
        "openState" | "endState",
        string
      >;
      type HunLuanSyRender = __UIComponent<
        fairygui.GComponent,
        { playerName: fairygui.GTextField; time: fairygui.GTextField },
        "isState",
        string
      >;
    }
    namespace Views.sandcastle {
      type SandcastleSceneView = __UIComponent<
        fairygui.GComponent,
        { info: SceneView.Views.sandcastle.SandcastleInfoView; btnOpen: MainUI.Components.MiddleLeft.BtnOpen },
        "openState",
        string
      >;
      type SandcastleInfoView = __UIComponent<
        fairygui.GComponent,
        {
          titleIcon: fairygui.GLoader;
          list: fairygui.GList;
          listPage: fairygui.GList;
          btnArrowL: SceneView.Compontents.ButtonArrowL;
          btnArrowR: SceneView.Compontents.ButtonArrowR;
        },
        "pageCtrl",
        string
      >;
      type Page0 = __UIComponent<
        fairygui.GComponent,
        {
          txt_yd: fairygui.GTextField;
          txt_hg: fairygui.GTextField;
          txt_gc: fairygui.GTextField;
          txt_time: fairygui.GTextField;
          txt_score: fairygui.GTextField;
          txt_multiple: fairygui.GTextField;
        },
        string,
        string
      >;
      type Page1 = __UIComponent<
        fairygui.GComponent,
        {
          txt_rankName1: fairygui.GTextField;
          txt_rankScore1: fairygui.GTextField;
          txt_rankName2: fairygui.GTextField;
          txt_rankScore2: fairygui.GTextField;
          txt_rankName3: fairygui.GTextField;
          txt_rankScore3: fairygui.GTextField;
        },
        string,
        string
      >;
      type SandcastleRankView = __UIComponent<
        fairygui.GComponent,
        {
          txt_rankName1: fairygui.GTextField;
          txt_rankScore1: fairygui.GTextField;
          txt_rankName2: fairygui.GTextField;
          txt_rankScore2: fairygui.GTextField;
          txt_rankName3: fairygui.GTextField;
          txt_rankScore3: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Views.shenWuDt {
      type ShenWuDtSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          helpBtn: SceneView.Compontents.ButtonHelp;
          taskName: fairygui.GTextField;
          shenWuNum: fairygui.GTextField;
          totalNum: fairygui.GTextField;
          time: fairygui.GTextField;
          group: fairygui.GGroup;
        },
        "openState",
        string
      >;
    }
    namespace Views.sandcastleBoss {
      type SandcastleBossSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          btnExit: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          rewardList: fairygui.GList;
          titleIcon: fairygui.GLoader;
          txt_state: fairygui.GTextField;
          txt_time: fairygui.GTextField;
          group: fairygui.GGroup;
        },
        "openState" | "bossCtrl",
        string
      >;
    }
    namespace Views.kuPao {
      type KuPaoView = __UIComponent<
        fairygui.GComponent,
        {
          comFrame: SceneView.Compontents.LeftBgCom;
          loaderTitle: fairygui.GLoader;
          txtTime: fairygui.GTextField;
          btnExplane: SceneView.Compontents.ButtonHelp;
          btnAward: SceneView.Compontents.ButtonReward;
          txtBg: fairygui.GTextField;
          txtTimeEnter: fairygui.GTextField;
          txtBg1: fairygui.GTextField;
          txtBossState: fairygui.GTextField;
        },
        string,
        string
      >;
      type KuPaoSceneView = __UIComponent<
        fairygui.GComponent,
        {
          comView: SceneView.Views.kuPao.KuPaoView;
          comSkill: SceneView.Views.kuPao.comSkill;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          btnLeave: SceneView.Compontents.BtnExit;
        },
        "conOpen",
        string
      >;
      type comSkill = __UIComponent<
        fairygui.GComponent,
        {
          skill0: SceneView.Views.kuPao.render.KuPaoSkillRender;
          skill1: SceneView.Views.kuPao.render.KuPaoSkillRender;
          skill2: SceneView.Views.kuPao.render.KuPaoSkillRender;
          skill3: SceneView.Views.kuPao.render.KuPaoSkillRender;
          btnNear: MainUI.Components.MiddleRight.BtnTarget;
          nearView: MainUI.Components.BottomRight.Near.NearView;
        },
        string,
        string
      >;
      type comKuPaoPage0 = __UIComponent<fairygui.GComponent, { txtDesc: fairygui.GTextField }, string, string>;
      type comKuPaoPage1 = __UIComponent<fairygui.GComponent, { txtDesc: fairygui.GTextField }, string, string>;
      type comKuPaoPage2 = __UIComponent<
        fairygui.GComponent,
        {
          txtBg: fairygui.GTextField;
          txtDesc: fairygui.GTextField;
          btnExplane: SceneView.Compontents.ButtonHelp;
          btnAward: SceneView.Compontents.ButtonReward;
          listPage: fairygui.GList;
        },
        string,
        string
      >;
    }
    namespace Views.gangBoss {
      type GangBossSceneView = __UIComponent<
        fairygui.GComponent,
        {
          info: SceneView.Views.gangBoss.GangBossInfoView;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
        },
        "openState",
        string
      >;
      type GangBossInfoView = __UIComponent<
        fairygui.GComponent,
        {
          titleIcon: fairygui.GLoader;
          listView: fairygui.GList;
          listPage: fairygui.GList;
          btnArrowL: SceneView.Compontents.ButtonArrowL;
          btnArrowR: SceneView.Compontents.ButtonArrowR;
        },
        "page",
        string
      >;
      type page1 = __UIComponent<
        fairygui.GComponent,
        {
          hp: SceneView.Compontents.ProgressBar1;
          bossName: fairygui.GTextField;
          timeStr: fairygui.GTextField;
          hpTxt: fairygui.GTextField;
          curBossDamage: fairygui.GTextField;
        },
        string,
        string
      >;
      type page2 = __UIComponent<
        fairygui.GComponent,
        {
          rewardItem: UILib.Components.render.RewardRender;
          damageDesc: fairygui.GTextField;
          totalDamage: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Views.jiSuLgc {
      type JiSuLianGCSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          infoView: SceneView.Views.jiSuLgc.InfoView;
          group: fairygui.GGroup;
        },
        "openState",
        string
      >;
      type InfoView = __UIComponent<
        fairygui.GComponent,
        {
          expBtn: UILib.Components.button.ButtonText;
          helpBtn: SceneView.Compontents.ButtonHelp;
          goNextBtn: SceneView.Compontents.ButtonNext;
          bCtimeTxt: fairygui.GTextField;
          expNum: fairygui.GTextField;
          timeTxt: fairygui.GTextField;
          atkNum: fairygui.GTextField;
          expUpNum: fairygui.GTextField;
        },
        "isBtnState",
        string
      >;
    }
    namespace Views.manorParty {
      type ManorPartySceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          info: SceneView.Views.manorParty.PartyInfo;
        },
        "c1",
        string
      >;
      type PartyInfoRender = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type progressBtn = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type PartyInfo = __UIComponent<
        fairygui.GComponent,
        {
          listView: fairygui.GList;
          btnArrowL: SceneView.Compontents.ButtonArrowL;
          btnArrowR: SceneView.Compontents.ButtonArrowR;
          titleIcon: fairygui.GLoader;
        },
        "page",
        string
      >;
      type page1 = __UIComponent<
        fairygui.GComponent,
        { infoList: fairygui.GList; endTimeStr: fairygui.GTextField },
        string,
        string
      >;
      type page2 = __UIComponent<
        fairygui.GComponent,
        {
          bossTimeStr: fairygui.GTextField;
          goBtn: UILib.Components.button.ButtonText;
          txtBg: fairygui.GTextField;
          endTimeStr: fairygui.GTextField;
          btnExplane: SceneView.Compontents.ButtonHelp;
        },
        "bossState",
        string
      >;
    }
    namespace Views.zhenMo {
      type ZhenMoSceneView = __UIComponent<
        fairygui.GComponent,
        {
          comView: SceneView.Views.zhenMo.ZhenMoView;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          btnLeave: SceneView.Compontents.BtnExit;
        },
        "conOpen",
        string
      >;
      type ZhenMoView = __UIComponent<
        fairygui.GComponent,
        {
          comFrame: SceneView.Compontents.LeftBgCom;
          loaderTitle: fairygui.GLoader;
          listView: fairygui.GList;
          listPage: fairygui.GList;
          btnArrowL: SceneView.Compontents.ButtonArrowL;
          btnArrowR: SceneView.Compontents.ButtonArrowR;
          txtTime: fairygui.GTextField;
        },
        "conPage",
        string
      >;
      type comZhenMoPage0 = __UIComponent<
        fairygui.GComponent,
        {
          txtBg: fairygui.GTextField;
          txtBoss0: fairygui.GTextField;
          txtBoss1: fairygui.GTextField;
          txtBoss2: fairygui.GTextField;
          txtBoss3: fairygui.GTextField;
          txtState0: fairygui.GTextField;
          txtState1: fairygui.GTextField;
          txtState2: fairygui.GTextField;
          txtState3: fairygui.GTextField;
        },
        string,
        string
      >;
      type comZhenMoPage1 = __UIComponent<
        fairygui.GComponent,
        {
          txtBg: fairygui.GTextField;
          txtRankBg: fairygui.GTextField;
          txtHurtBg: fairygui.GTextField;
          txtRank: fairygui.GTextField;
          txtHurt: fairygui.GTextField;
          btnHelp: SceneView.Compontents.ButtonHelp;
          btnRank: SceneView.Compontents.ButtonRank;
        },
        string,
        string
      >;
    }
    namespace Views.htdZzhan {
      type HtdZzhanSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnLeave: SceneView.Compontents.BtnExit;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          comSkill: SceneView.Views.htdZzhan.comSkillView;
          comView: SceneView.Views.htdZzhan.comHTDZZ;
        },
        "openState",
        string
      >;
      type comSkillView = __UIComponent<
        fairygui.GComponent,
        {
          skill0: SceneView.Views.htdZzhan.render.HTDZZSkillRender;
          skill1: SceneView.Views.htdZzhan.render.HTDZZSkillRender;
          btnNear: MainUI.Components.MiddleRight.BtnTarget;
          nearView: MainUI.Components.BottomRight.Near.NearView;
        },
        string,
        string
      >;
      type comHTDZZ = __UIComponent<
        fairygui.GComponent,
        {
          comFrame: SceneView.Compontents.LeftBgCom;
          loaderTitle: fairygui.GLoader;
          btnBoss: UILib.Components.button.ButtonText;
          btnDH: SceneView.Compontents.ButtonReward;
          btnHelp: SceneView.Compontents.ButtonHelp;
          txtTime: fairygui.GTextField;
          txtNameU: fairygui.GTextField;
          txtNameD: fairygui.GTextField;
          txtCount: fairygui.GTextField;
          txtBoss: fairygui.GTextField;
        },
        string,
        string
      >;
      type pageHTDZZ0 = __UIComponent<
        fairygui.GComponent,
        {
          txtBack1: fairygui.GTextField;
          txtNameU: fairygui.GTextField;
          txtNameD: fairygui.GTextField;
          btnDH: UILib.Components.button.ButtonText;
        },
        string,
        string
      >;
      type pageHTDZZ1 = __UIComponent<
        fairygui.GComponent,
        {
          txtBack1: fairygui.GTextField;
          txtCount: fairygui.GTextField;
          txtBoss: fairygui.GTextField;
          btnHelp: SceneView.Compontents.ButtonHelp;
          btnBoss: UILib.Components.button.ButtonText;
        },
        string,
        string
      >;
    }
    namespace Views.crossServerFight {
      type CrossServerFightSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: SceneView.Compontents.BtnOpen;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          rankBtn: SceneView.Compontents.ButtonRank;
          helpBtn: SceneView.Compontents.ButtonHelp;
          timeTxt: fairygui.GTextField;
          tmepName: fairygui.GTextField;
          flagName1: fairygui.GTextField;
          flagName2: fairygui.GTextField;
          flagName3: fairygui.GTextField;
          flagState1: fairygui.GTextField;
          flagState2: fairygui.GTextField;
          flagState3: fairygui.GTextField;
          flagTime1: fairygui.GTextField;
          flagTime2: fairygui.GTextField;
          flagTime3: fairygui.GTextField;
          copyGroup: fairygui.GGroup;
          group: fairygui.GGroup;
        },
        "openState",
        string
      >;
    }
    namespace Views.empireSecre {
      type EmpireSeSceneView = __UIComponent<
        fairygui.GComponent,
        { comView: SceneView.Views.empireSecre.empireView; btnOpen: MainUI.Components.MiddleLeft.BtnOpen },
        "conOpen",
        string
      >;
      type empireView = __UIComponent<
        fairygui.GComponent,
        {
          loaderTitle: fairygui.GLoader;
          btnLeave: SceneView.Compontents.BtnExit;
          btnExplane: SceneView.Compontents.ButtonHelp;
          listBoss: fairygui.GList;
          txtBg1: fairygui.GTextField;
          txtTime: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Views.empireSecre.render {
      type EmpireSeRender = __UIComponent<
        fairygui.GComponent,
        { btnGo: UILib.Components.button.ButtonText; txtName: fairygui.GTextField; txtTime: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace Views.mining {
      type MiningView = __UIComponent<
        fairygui.GComponent,
        {
          iconFrame: SceneView.Compontents.LeftBgCom;
          loaderTitle: fairygui.GLoader;
          quickBtn: UILib.Components.button.Button6;
          reward: UILib.Components.render.RewardRender;
          count: fairygui.GTextField;
        },
        "c1",
        string
      >;
      type MiningSceneView = __UIComponent<
        fairygui.GComponent,
        {
          view: SceneView.Views.mining.MiningView;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
        },
        "openState",
        string
      >;
    }
    namespace Views.szbz {
      type SZBZSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          helpBtn: SceneView.Compontents.ButtonHelp;
          taskBtn0: UILib.Components.button.ButtonText;
          taskBtn2: UILib.Components.button.ButtonText;
          taskBtn1: UILib.Components.button.ButtonText;
          task0: fairygui.GRichTextField;
          task1: fairygui.GRichTextField;
          task2: fairygui.GRichTextField;
          boxGroup: fairygui.GGroup;
          timeStr: fairygui.GTextField;
          timeGroup: fairygui.GGroup;
          timeStr1: fairygui.GTextField;
          timeGroup1: fairygui.GGroup;
          copyGroup: fairygui.GGroup;
          group: fairygui.GGroup;
          timeFont: fairygui.GTextField;
          endGroup: fairygui.GGroup;
        },
        "openState" | "endState" | "isEnd" | "isState" | "isBoxState",
        string
      >;
    }
    namespace Views.rsjLing {
      type RSJLingSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          timeStr: fairygui.GTextField;
          list: fairygui.GList;
          copyGroup: fairygui.GGroup;
          group: fairygui.GGroup;
          timeFont: fairygui.GTextField;
          endGroup: fairygui.GGroup;
        },
        "openState" | "endState",
        string
      >;
      type RSJLingSceneRender = __UIComponent<
        fairygui.GComponent,
        { bossName: fairygui.GTextField; bossState: fairygui.GTextField },
        "isState",
        string
      >;
    }
    namespace Views.jumoshendian {
      type JuMoSDSceneView = __UIComponent<
        fairygui.GComponent,
        {
          comView: SceneView.Views.jumoshendian.JuMoSDView;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          btnLeave: SceneView.Compontents.BtnExit;
        },
        "conOpen",
        string
      >;
      type JuMoSDView = __UIComponent<
        fairygui.GComponent,
        {
          loaderTitle: fairygui.GLoader;
          listStatue: fairygui.GList;
          btnBoss: UILib.Components.button.ButtonText;
          btnRank: UILib.Components.button.ButtonText;
          btnExplain: UILib.Components.button.ButtonText;
          txtBack: fairygui.GTextField;
          txtTime: fairygui.GTextField;
          txt_timeDesc: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Views.jumoshendian.render {
      type JuMoStatueRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtOwn: fairygui.GTextField; txtState: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace Views.shenMaiSD {
      type ShenMaiSDSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          btnExit: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          btnHelp: SceneView.Compontents.ButtonHelp;
          rewardList: fairygui.GList;
          txt_count: fairygui.GTextField;
          group: fairygui.GGroup;
        },
        "openState",
        string
      >;
    }
    namespace Views.materCopy {
      type MaterCopySceneView = __UIComponent<
        fairygui.GComponent,
        {
          comView: SceneView.Views.materCopy.MaterCopyView;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          btnLeave: SceneView.Compontents.BtnExit;
        },
        "conOpen",
        string
      >;
      type MaterCopyView = __UIComponent<
        fairygui.GComponent,
        {
          comFrame: SceneView.Compontents.LeftBgCom;
          loaderTitle: fairygui.GLoader;
          listItem: fairygui.GList;
          txtBg: fairygui.GTextField;
          txtCount1: fairygui.GTextField;
          txtCount2: fairygui.GTextField;
          txtCountMin: fairygui.GTextField;
          txtCountBoss: fairygui.GTextField;
          txtTime: fairygui.GTextField;
          txtTimeBg: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Views.xueFan {
      type comSkill = __UIComponent<
        fairygui.GComponent,
        {
          skillRender: SceneView.Views.xueFan.render.XueFanSkillRender;
          btnRepair: SceneView.Views.xueFan.render.ButtonFun;
          btnUp: SceneView.Views.xueFan.render.ButtonFun;
          btnBack: SceneView.Views.xueFan.render.ButtonFun;
          btnPlayer: SceneView.Views.xueFan.render.BtnPlayer;
          btnMonster: SceneView.Views.xueFan.render.BtnMonster;
          LoaderRepairName: fairygui.GLoader;
          loaderUpName: fairygui.GLoader;
          btnBackName: fairygui.GLoader;
        },
        string,
        string
      >;
      type XueFanSceneView = __UIComponent<
        fairygui.GComponent,
        {
          comView: SceneView.Views.xueFan.XueFanView;
          comSkill: SceneView.Views.xueFan.comSkill;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          comTime: SceneView.Views.xueFan.comTime;
          loaderTitle: fairygui.GLoader;
          btnNear: SceneView.Views.xueFan.render.ButtonNearBy;
          nearView: SceneView.Views.xueFan.comNearView;
          btnLeave: SceneView.Compontents.BtnExit;
        },
        "conOpen",
        string
      >;
      type XueFanView = __UIComponent<
        fairygui.GComponent,
        {
          conFrame: SceneView.Compontents.LeftBgCom;
          loaderTitle: fairygui.GLoader;
          btnFightInfo: fairygui.GImage;
          btnStateCentre: UILib.Components.button.ButtonText;
          btnStateSouth: UILib.Components.button.ButtonText;
          btnInfo: SceneView.Compontents.ButtonHelp;
          txtCentreCount: fairygui.GTextField;
          txtSouthCount: fairygui.GTextField;
          txtTime: fairygui.GTextField;
          txtPower: fairygui.GTextField;
          txtInfoBg: fairygui.GTextField;
          txtSouthBg: fairygui.GTextField;
          txtCentreBg: fairygui.GTextField;
          txtTimeBg: fairygui.GTextField;
          txtPowerBg: fairygui.GTextField;
          txtHelpBg: fairygui.GTextField;
        },
        string,
        string
      >;
      type comTime = __UIComponent<
        fairygui.GComponent,
        { loaderText1: fairygui.GLoader; txtTimePrepare: fairygui.GTextField; loaderText2: fairygui.GLoader },
        string,
        string
      >;
      type comNearView = __UIComponent<
        fairygui.GComponent,
        {
          iconFrame: fairygui.GImage;
          listShip: fairygui.GList;
          txtName: fairygui.GTextField;
          txtLevel: fairygui.GTextField;
          txtDef: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Views.tongTianTa {
      type TongTianSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          btnExit: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          btnContinue: UILib.Components.button.Button9_small;
          titleIcon: fairygui.GLoader;
          rewardList: fairygui.GList;
          txt_lv: fairygui.GTextField;
          txt_task: fairygui.GTextField;
          txt_time: fairygui.GTextField;
          group: fairygui.GGroup;
        },
        "openState" | "stateCtrl",
        string
      >;
    }
    namespace Views.xueFan.render {
      type XueFanSkillRender = __UIComponent<
        fairygui.GComponent,
        {
          iconFrame: fairygui.GImage;
          loaderIcon: fairygui.GLoader;
          loaderName: fairygui.GLoader;
          mask: SceneView.Views.xueFan.render.MaskXueFanView;
          maskGraph: fairygui.GGraph;
        },
        string,
        string
      >;
      type ButtonFun = __UIComponent<
        fairygui.GButton,
        { iconFrame: fairygui.GImage; icon: fairygui.GLoader; iconLignt: fairygui.GImage },
        "button",
        string
      >;
      type XueFanFunRender = __UIComponent<
        fairygui.GComponent,
        { iconFrame: fairygui.GImage; icon: fairygui.GLoader; btnName: UILib.Components.button.ButtonText },
        string,
        string
      >;
      type MaskXueFanView = __UIComponent<fairygui.GComponent, { bag: fairygui.GImage }, string, string>;
      type ButtonNearBy = __UIComponent<fairygui.GButton, { iconBg: fairygui.GImage }, "button", string>;
      type XueFanShipRender = __UIComponent<
        fairygui.GButton,
        {
          iconBack: fairygui.GImage;
          iconLight: fairygui.GImage;
          txtName: fairygui.GTextField;
          txtLevel: fairygui.GTextField;
          txtDef: fairygui.GTextField;
        },
        "button",
        string
      >;
      type BtnPlayer = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnMonster = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
    namespace Views.throne {
      type ThroneSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          timeCom: SceneView.Views.throne.comTime;
          btnExit: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          btnRank: SceneView.Compontents.ButtonRank;
          btnAward: SceneView.Compontents.ButtonReward;
          btnHelp: SceneView.Compontents.ButtonHelp;
          txt_timeDesc: fairygui.GTextField;
          txt_task: fairygui.GTextField;
          txt_time: fairygui.GTextField;
          group: fairygui.GGroup;
        },
        "openState" | "phaseCtrl",
        string
      >;
      type ThroneSceneRender = __UIComponent<
        fairygui.GComponent,
        { txt_rank: fairygui.GTextField; txt_roleName: fairygui.GTextField; txt_count: fairygui.GTextField },
        string,
        string
      >;
      type comTime = __UIComponent<
        fairygui.GComponent,
        { loaderText1: fairygui.GLoader; timeTxt: fairygui.GTextField; loaderText2: fairygui.GLoader },
        "typeCtrl",
        string
      >;
    }
    namespace Views.CrossServerFyzcXck {
      type CrossServerFyzcSceneView = __UIComponent<
        fairygui.GComponent,
        {
          fyzcView: SceneView.Views.CrossServerFyzcXck.CrossServerFyzcInfoView;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
        },
        "openState",
        string
      >;
      type CrossServerFyzcInfoView = __UIComponent<
        fairygui.GComponent,
        {
          titleIcon: fairygui.GLoader;
          infoText: fairygui.GTextField;
          playerCount: fairygui.GTextField;
          getBossBtn: UILib.Components.button.ButtonText;
          getJlBtn: UILib.Components.button.ButtonText;
          bossInfoText: fairygui.GTextField;
          listItem: fairygui.GList;
          timeStr: fairygui.GTextField;
          exitBtn: SceneView.Compontents.BtnExit;
          listBtn: UILib.Components.button.ButtonText;
          attackInfoList: fairygui.GList;
          myAttackInfo: SceneView.Views.CrossServerFyzcXck.Components.AttackInfoRender;
        },
        "pageCon",
        string
      >;
    }
    namespace Views.CrossServerFyzcXck.Components {
      type AttackInfoRender = __UIComponent<
        fairygui.GComponent,
        { attackText: fairygui.GTextField; attackInfoName: fairygui.GTextField; attackInfoAttack: fairygui.GTextField },
        string,
        string
      >;
      type jiangLiRender = __UIComponent<
        fairygui.GComponent,
        {
          titleIcon: fairygui.GLoader;
          listItem: fairygui.GList;
          openBtn: UILib.Components.button.Button6;
          getAllOpen: UILib.Components.button.Button6;
          txtMoney: fairygui.GTextField;
        },
        "mingCiCon",
        string
      >;
    }
    namespace Views.skzj {
      type SKZJSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          helpBtn: SceneView.Compontents.ButtonHelp;
          bossList: fairygui.GList;
          txt_time: fairygui.GTextField;
          group: fairygui.GGroup;
        },
        "openState",
        string
      >;
      type SKZJSceneRender = __UIComponent<
        fairygui.GComponent,
        { txt_name: fairygui.GTextField; txt_time: fairygui.GTextField; btn_go: UILib.Components.button.ButtonText },
        "stateCtrl",
        string
      >;
    }
    namespace Views.ylsd {
      type YLSDSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          exitBtn: SceneView.Compontents.BtnExit;
          bg: SceneView.Compontents.LeftBgCom;
          titleIcon: fairygui.GLoader;
          helpBtn: SceneView.Compontents.ButtonHelp;
          bossList: fairygui.GList;
          group: fairygui.GGroup;
        },
        "openState",
        string
      >;
      type YLSDSceneRender = __UIComponent<
        fairygui.GComponent,
        { txt_name: fairygui.GTextField; txt_time: fairygui.GTextField; btn_go: UILib.Components.button.ButtonText },
        "stateCtrl",
        string
      >;
    }
    namespace Compontents {
      type LeftBgCom = __UIComponent<fairygui.GComponent, { bg: fairygui.GImage }, string, string>;
      type BtnOpen = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BtnExit = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonSel = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonHelp = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonRank = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ProgressBar1 = __UIComponent<fairygui.GProgressBar, { bar: fairygui.GImage }, string, string>;
      type ButtonReward = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonArrowR = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonArrowL = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonNext = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonSave = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ProgressBar2 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace Views.kuPao.render {
      type KuPaoSkillRender = __UIComponent<
        fairygui.GButton,
        {
          skillbg: fairygui.GImage;
          icon: fairygui.GLoader;
          iconLight: fairygui.GImage;
          cdMask: MainUI.Components.BottomRight.mask;
          cdGraph: fairygui.GGraph;
          autoMask: fairygui.GImage;
          txtCount: fairygui.GTextField;
          txtName: fairygui.GTextField;
        },
        "button",
        "t0"
      >;
    }
    namespace Views.htdZzhan.render {
      type HTDZZSkillRender = __UIComponent<
        fairygui.GButton,
        {
          skillbg: fairygui.GImage;
          icon: fairygui.GLoader;
          iconLight: fairygui.GImage;
          cdMask: MainUI.Components.BottomRight.mask;
          cdGraph: fairygui.GGraph;
          txtName: fairygui.GTextField;
          useTxt: fairygui.GTextField;
        },
        "button" | "conTar",
        "t0"
      >;
    }
    namespace Views.privilegeBoss {
      type PrivilegeBossView = __UIComponent<
        fairygui.GComponent,
        {
          txtMapName: fairygui.GTextField;
          itemList: fairygui.GList;
          btnExit: UILib.Components.button.Button13;
          txtTime: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Views.capitalWar {
      type CapitalWarView = __UIComponent<
        fairygui.GComponent,
        {
          txtTime1: fairygui.GTextField;
          btnBigExit: UILib.Components.button.Button2_Blue;
          txtTime2: fairygui.GTextField;
          com: SceneView.Views.capitalWar.CapitalFirstView;
          txtTime3: fairygui.GTextField;
          txtName3: fairygui.GTextField;
          rewardList: fairygui.GList;
          btnExit: UILib.Components.button.Button13;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
        },
        "conState" | "conOpen",
        string
      >;
      type CapitalFirstView = __UIComponent<
        fairygui.GComponent,
        { txtName1: fairygui.GTextField; txtName2: fairygui.GTextField; txtTime: fairygui.GTextField },
        string,
        string
      >;
      type CapitalWarItemRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.ItemCFGRender; txtCount: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace Views.maze {
      type MazeSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          iconFrame: SceneView.Compontents.LeftBgCom;
          txtTime: fairygui.GTextField;
          btnQuit: UILib.Components.button.Button13;
          txtFloor: fairygui.GTextField;
          txtBossName: fairygui.GTextField;
          txtClue: fairygui.GTextField;
          bossPro: SceneView.Views.maze.ProgressBar2;
          txtBossTime: fairygui.GTextField;
          rewardList: fairygui.GList;
          txtDesc: fairygui.GTextField;
          imgClue: fairygui.GLoader;
        },
        "bossState" | "clueState" | "openState",
        string
      >;
      type ProgressBar2 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type MazeRewardCom = __UIComponent<
        fairygui.GComponent,
        { listItem: fairygui.GList; txtName: fairygui.GTextField },
        "getState",
        string
      >;
      type MazeRewardRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.RewardRender },
        string,
        string
      >;
    }
    namespace Views.warOfGods {
      type WarOfGodsItemRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.ItemCFGRender; txtCount: fairygui.GTextField },
        string,
        string
      >;
      type WarOfGodsNpcWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameBg;
          txtDesc: fairygui.GTextField;
          btnGo: UILib.Components.button.Button2_Orange;
          txtName: fairygui.GTextField;
        },
        string,
        string
      >;
      type WarOfGodsRankRender = __UIComponent<
        fairygui.GComponent,
        { txtRank: fairygui.GTextField; txtName: fairygui.GTextField; txtScore: fairygui.GTextField },
        string,
        string
      >;
      type WarOfGodsRankView = __UIComponent<
        fairygui.GComponent,
        { rankList: fairygui.GList; rewardList: fairygui.GList },
        string,
        string
      >;
      type WarOfGodsRankWindow = __UIComponent<
        fairygui.GComponent,
        { comView: SceneView.Views.warOfGods.WarOfGodsRankView },
        string,
        string
      >;
      type WarOfGodsRewardRender = __UIComponent<
        fairygui.GComponent,
        { imgName: fairygui.GLoader; rewardList: fairygui.GList },
        string,
        string
      >;
      type WarOfGodsView = __UIComponent<
        fairygui.GComponent,
        {
          rankList: fairygui.GList;
          btnRank: UILib.Components.button.Button12;
          txtScore: fairygui.GTextField;
          txtRank: fairygui.GTextField;
          txtKill: fairygui.GTextField;
          rewardList: fairygui.GList;
          txtTime: fairygui.GTextField;
          btnExit: UILib.Components.button.Button13;
          txtDesc: fairygui.GTextField;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
        },
        "conState",
        string
      >;
    }
    namespace Views.CloudNote {
      type CloudNoteView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          txtName1: fairygui.GTextField;
          txtTime1: fairygui.GTextField;
          g1: fairygui.GGroup;
          txtName4: fairygui.GTextField;
          txtTime4: fairygui.GTextField;
          g4: fairygui.GGroup;
          txtName2: fairygui.GTextField;
          txtTime2: fairygui.GTextField;
          g2: fairygui.GGroup;
          txtName3: fairygui.GTextField;
          txtTime3: fairygui.GTextField;
          g3: fairygui.GGroup;
          btnExit: UILib.Components.button.Button13;
          txtEmpty4: fairygui.GTextField;
          txtEmpty3: fairygui.GTextField;
          txtEmpty1: fairygui.GTextField;
          txtEmpty2: fairygui.GTextField;
          txtActTime: fairygui.GTextField;
          btnGo1: UILib.Components.button.Button12;
          btnGo4: UILib.Components.button.Button12;
          btnGo3: UILib.Components.button.Button12;
          btnGo2: UILib.Components.button.Button12;
        },
        "conState",
        string
      >;
      type CloudNoteAwardWindow = __UIComponent<
        fairygui.GComponent,
        { rewardList: fairygui.GList; close: UILibFrame.Components.ButtonClose },
        string,
        string
      >;
    }
    namespace Views.crossServerDF {
      type CrossServerDFView = __UIComponent<
        fairygui.GComponent,
        {
          txtMapName: fairygui.GTextField;
          itemList: fairygui.GList;
          btnExit: UILib.Components.button.Button13;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
        },
        "conState",
        string
      >;
    }
    namespace Views.crossServerFA {
      type CrossServerFAView = __UIComponent<
        fairygui.GComponent,
        {
          rankList: fairygui.GList;
          btnRank: UILib.Components.button.Button12;
          rewardList: fairygui.GList;
          btnExit: UILib.Components.button.Button13;
          txtBossName: fairygui.GTextField;
          bar: SceneView.Views.maze.ProgressBar2;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
        },
        "conState",
        string
      >;
      type CrossServerFARankWindow = __UIComponent<
        fairygui.GComponent,
        { close: UILibFrame.Components.ButtonClose; rankList: fairygui.GList },
        string,
        string
      >;
      type CrossServerFARender = __UIComponent<
        fairygui.GComponent,
        { txtRank: fairygui.GTextField; txtName: fairygui.GTextField; txtScore: fairygui.GTextField },
        string,
        string
      >;
      type CrossServerFARankRender = __UIComponent<
        fairygui.GComponent,
        {
          imgRank: fairygui.GLoader;
          txtRank: fairygui.GTextField;
          txtName: fairygui.GTextField;
          txtFight: fairygui.GTextField;
          txtScore: fairygui.GTextField;
          rewardList: fairygui.GList;
        },
        "conState",
        string
      >;
    }
    namespace Views.crossServerHT {
      type CrossServerHTView = __UIComponent<
        fairygui.GComponent,
        {
          btnExit: UILib.Components.button.Button13;
          txtVit: fairygui.GTextField;
          bossList: fairygui.GList;
          txtTime: fairygui.GTextField;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
        },
        "conState" | "conOpen",
        string
      >;
      type CrossServerHTDescWindow = __UIComponent<
        fairygui.GComponent,
        {
          txtName: fairygui.GTextField;
          close: UILibFrame.Components.ButtonTipsClose;
          com: SceneView.Views.crossServerHT.descCom;
        },
        string,
        string
      >;
      type descCom = __UIComponent<
        fairygui.GComponent,
        { txtDesc: fairygui.GTextField; rewardList: fairygui.GList },
        string,
        string
      >;
      type CrossServerHTBossRender = __UIComponent<
        fairygui.GComponent,
        {
          txtName: fairygui.GTextField;
          btnCheck: UILib.Components.button.Button12;
          btnGo: UILib.Components.button.Button12;
          txtTime: fairygui.GTextField;
        },
        "conState",
        string
      >;
    }
    namespace Views.crossServerMoba {
      type CrossServerMobaView = __UIComponent<
        fairygui.GComponent,
        {
          txtRedVal: fairygui.GTextField;
          txtBlueVal: fairygui.GTextField;
          txtTime: fairygui.GTextField;
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          iconFrame: SceneView.Compontents.LeftBgCom;
          btnRank: UILib.Components.button.Button12;
          list: fairygui.GList;
          txtMyRank: fairygui.GTextField;
          txtMyScore: fairygui.GTextField;
          btnExit: UILib.Components.button.Button13;
          btnPlayDesc: UILib.Components.button.ButtonLabel;
        },
        "openState",
        string
      >;
      type CrossServerMobaRender = __UIComponent<
        fairygui.GComponent,
        { txtRank: fairygui.GTextField; txtName: fairygui.GTextField; txtScore: fairygui.GTextField },
        string,
        string
      >;
      type CrossServerMobaRankWindow = __UIComponent<
        fairygui.GComponent,
        { contentArea: UILibFrame.Components.comFrameThree; list: fairygui.GList },
        string,
        string
      >;
      type CrossServerMobaRankRender = __UIComponent<
        fairygui.GComponent,
        {
          txtRank: fairygui.GTextField;
          txtName: fairygui.GTextField;
          txtFight: fairygui.GTextField;
          txtKillCount: fairygui.GTextField;
          txtScore: fairygui.GTextField;
          txtDieCount: fairygui.GTextField;
        },
        string,
        string
      >;
      type CrossServerMobaResultWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameThree;
          txtResult: fairygui.GTextField;
          list: fairygui.GList;
          awardList: fairygui.GList;
        },
        "awardCon",
        string
      >;
    }
    namespace Views.team {
      type TeamSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          iconFrame: SceneView.Compontents.LeftBgCom;
          txtDes: fairygui.GTextField;
          txtTime: fairygui.GTextField;
          btnQuit: UILib.Components.button.Button13;
          bloodPro: SceneView.Compontents.ProgressBar2;
          buffList1: fairygui.GList;
          bloodList1: fairygui.GList;
          buffList2: fairygui.GList;
          bloodList2: fairygui.GList;
          buffList3: fairygui.GList;
        },
        "openState" | "stateCon",
        string
      >;
      type TeamSceneBloodRender = __UIComponent<
        fairygui.GComponent,
        {
          bloodPro: SceneView.Compontents.ProgressBar2;
          txtBossName: fairygui.GTextField;
          txtBossState: fairygui.GTextField;
        },
        string,
        string
      >;
      type TeamSceneTalentRender = __UIComponent<
        fairygui.GComponent,
        { imgLoader: fairygui.GLoader; txtContent: fairygui.GTextField },
        string,
        string
      >;
      type TeamSceneResultWindow = __UIComponent<
        fairygui.GComponent,
        {
          succeedList: fairygui.GList;
          btnSucceedSure: UILib.Components.button.Button2_Orange;
          btnFailedSure: UILib.Components.button.Button2_Green;
          failedList: fairygui.GList;
        },
        "resultCon",
        string
      >;
      type TeamSceneResultRender = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
    }
    namespace Views.teamDesert {
      type TeamScientistWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameBg;
          txtDesc1: fairygui.GTextField;
          txtDesc2: fairygui.GTextField;
          btnJoin: UILib.Components.button.Button2_Orange;
        },
        string,
        string
      >;
      type TeamRefugeWindow = __UIComponent<
        fairygui.GComponent,
        {
          contentArea: UILibFrame.Components.comFrameBg;
          txtDesc1: fairygui.GTextField;
          txtDesc2: fairygui.GTextField;
          txtDesc3: fairygui.GTextField;
          txtDesc4: fairygui.GTextField;
          rewardList: fairygui.GList;
          getLoader: fairygui.GLoader;
        },
        string,
        string
      >;
      type TeamDesertSceneView = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: MainUI.Components.MiddleLeft.BtnOpen;
          iconFrame: SceneView.Compontents.LeftBgCom;
          txtTime: fairygui.GTextField;
          btnQuit: UILib.Components.button.Button13;
          txtDesc: fairygui.GTextField;
          txtState1: fairygui.GTextField;
          txtState2: fairygui.GTextField;
          txtState3: fairygui.GTextField;
          txtRandom: fairygui.GTextField;
          txtBossName: fairygui.GTextField;
          bossPro: SceneView.Compontents.ProgressBar2;
          txtDesc1: fairygui.GTextField;
        },
        "openState",
        string
      >;
    }
  }
  namespace Shield {
    type ShieldWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        relation: UILibFrame.Components.WindowRelationList;
        loaderTitle: fairygui.GLoader;
      },
      string,
      string
    >;
    type ShieldShouWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtFight: fairygui.GTextField;
        listBg: fairygui.GList;
        textAttrName: fairygui.GTextField;
        textAttrValue: fairygui.GTextField;
        textNextAttrValue: fairygui.GTextField;
        btnAct: Shield.Components.btn_Active;
        listStar: fairygui.GList;
        listStarL: fairygui.GList;
        btnLvUp: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
        item: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        lvUpGroup: fairygui.GGroup;
        listSkill: fairygui.GList;
        txtSpAttr: fairygui.GTextField;
        curName: fairygui.GLoader;
        curLv: fairygui.GLoader;
        jie: fairygui.GLoader;
        modGroup: fairygui.GGroup;
        roleInView: UILib.Components.roleInView.RoleInView;
        mod: fairygui.GGraph;
        imgMax: fairygui.GImage;
      },
      string,
      string
    >;
    type ShieldPeiWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtFight: fairygui.GTextField;
        listBg: fairygui.GList;
        textAttrName: fairygui.GTextField;
        textAttrValue: fairygui.GTextField;
        textNextAttrValue: fairygui.GTextField;
        btnAct: Shield.Components.btn_Active;
        listStar: fairygui.GList;
        listStarL: fairygui.GList;
        btnLvUp: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
        item: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        lvUpGroup: fairygui.GGroup;
        listSkill: fairygui.GList;
        txtSpAttr: fairygui.GTextField;
        curName: fairygui.GLoader;
        curLv: fairygui.GLoader;
        jie: fairygui.GLoader;
        modGroup: fairygui.GGroup;
        roleInView: UILib.Components.roleInView.RoleInView;
        mod: fairygui.GGraph;
        imgMax: fairygui.GImage;
      },
      string,
      string
    >;
    type ShieldZanWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtFight: fairygui.GTextField;
        listBg: fairygui.GList;
        textAttrName: fairygui.GTextField;
        textAttrValue: fairygui.GTextField;
        textNextAttrValue: fairygui.GTextField;
        btnAct: Shield.Components.btn_Active;
        listStar: fairygui.GList;
        listStarL: fairygui.GList;
        btnLvUp: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
        item: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        lvUpGroup: fairygui.GGroup;
        listSkill: fairygui.GList;
        txtSpAttr: fairygui.GTextField;
        curName: fairygui.GLoader;
        curLv: fairygui.GLoader;
        jie: fairygui.GLoader;
        modGroup: fairygui.GGroup;
        roleInView: UILib.Components.roleInView.RoleInView;
        mod: fairygui.GGraph;
        imgMax: fairygui.GImage;
      },
      string,
      string
    >;
    namespace Components {
      type AttrBgRender = __UIComponent<fairygui.GComponent, {}, string, string>;
      type btn_Active = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ShieldSkillRender = __UIComponent<
        fairygui.GComponent,
        { skillIcon: fairygui.GLoader; txtLv: fairygui.GTextField },
        string,
        string
      >;
    }
  }
  namespace ShieldSale {
    type ShieldSaleWindow = __UIComponent<
      fairygui.GComponent,
      { relation: UILibFrame.Components.WindowRelationList1; close: UILibFrame.Components.ButtonCloseBiz },
      string,
      string
    >;
    type ShieldSalePrivilegeWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnBuy: ShieldSale.Components.Button1;
        render: UILib.Components.render.RewardRender1;
        txtTime: fairygui.GTextField;
      },
      "conBuy",
      string
    >;
    type ShieldSaleTrenchWindow = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        btnRight: UILib.Components.button.ButtonArrow;
        btnLeft: UILib.Components.button.ButtonArrow;
        txtTime: fairygui.GTextField;
      },
      string,
      string
    >;
    type WindowRelationList = __UIComponent<fairygui.GComponent, { listBtn: fairygui.GList }, string, string>;
    namespace Components {
      type ShieldSaleTrenchRender = __UIComponent<
        fairygui.GComponent,
        {
          mod: fairygui.GGraph;
          rewardList: fairygui.GList;
          btnBuy: UILib.Components.button.Button14;
          imgName: fairygui.GLoader;
        },
        "conBuy",
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
    }
  }
  namespace SignIn {
    type SignInWindow = __UIComponent<
      fairygui.GComponent,
      {
        dayList: fairygui.GList;
        txtTotalCount: fairygui.GTextField;
        bar: SignIn.Components.SignInAwardBar;
        awardList: fairygui.GList;
        introList: fairygui.GList;
        bubble: fairygui.GGroup;
        btnHelp: UILibFrame.Components.ButtonHelp;
      },
      string,
      string
    >;
    namespace Components {
      type SignInRender = __UIComponent<
        fairygui.GButton,
        {
          dayBg: fairygui.GLoader;
          item: UILib.Components.render.BagRender;
          flag: fairygui.GLoader;
          dayTxt: fairygui.GTextField;
          dayCount: fairygui.GTextField;
          isSign: fairygui.GImage;
          buqian: fairygui.GImage;
        },
        "button",
        string
      >;
      type SignInAwardRender = __UIComponent<
        fairygui.GButton,
        { bg: fairygui.GImage; canGet: fairygui.GImage; txtDay: fairygui.GTextField; isGetAward: fairygui.GImage },
        string,
        string
      >;
      type SignInAwardBar = __UIComponent<fairygui.GProgressBar, { bar: fairygui.GImage }, string, string>;
    }
  }
  namespace Skill {
    type SkillWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrame; relation: UILibFrame.Components.WindowRelationList },
      string,
      string
    >;
    type SkillBaseWindow = __UIComponent<
      fairygui.GComponent,
      {
        curSkillName: fairygui.GTextField;
        nextSkillName: fairygui.GTextField;
        skillList: fairygui.GList;
        circleImg: fairygui.GImage;
        skillPro: Skill.Components.ProgressBar1;
        talent0: Skill.Components.SkillTalentRender;
        talent1: Skill.Components.SkillTalentRender;
        talent2: Skill.Components.SkillTalentRender;
        talentGroup: fairygui.GGroup;
        skillIcon: fairygui.GLoader;
        talentList: fairygui.GList;
        btnUpgrade: UILib.Components.button.Button11;
        costRender: UILib.Components.render.ItemCFGRender;
        costTxt: fairygui.GTextField;
        curTypeList: fairygui.GList;
        nextTypeList: fairygui.GList;
        loaderMax: fairygui.GLoader;
        curDesRender: Skill.Components.SkillDesRender;
        nextDesRender: Skill.Components.SkillDesRender;
        skillName: fairygui.GTextField;
      },
      "maxCtrl",
      string
    >;
    type SkillPassiveWindow = __UIComponent<
      fairygui.GComponent,
      {
        skillList: fairygui.GList;
        skillIcon: fairygui.GLoader;
        skillLv: fairygui.GTextField;
        curSkillName: fairygui.GTextField;
        nextSkillName: fairygui.GTextField;
        curDesRender: Skill.Components.SkillDesRender;
        nextDesRender: Skill.Components.SkillDesRender;
        btnUpgrade: UILib.Components.button.Button11;
        costRender: UILib.Components.render.ItemCFGRender;
        costTxt: fairygui.GTextField;
        loaderMax: fairygui.GLoader;
        skillName: fairygui.GTextField;
      },
      "maxCtrl",
      string
    >;
    type SkillSettingWindow = __UIComponent<
      fairygui.GComponent,
      {
        skillList: fairygui.GList;
        itemList: fairygui.GList;
        btnSkill: Skill.Components.tab;
        btnItem: Skill.Components.tab;
        shortCut_5: Skill.Components.SkillSetShortCutRender;
        shortCut_6: Skill.Components.SkillSetShortCutRender;
        shortCut_7: Skill.Components.SkillSetShortCutRender;
        shortCut_8: Skill.Components.SkillSetShortCutRender;
        shortCut_1: Skill.Components.SkillSetShortCutRender;
        shortCut_2: Skill.Components.SkillSetShortCutRender;
        shortCut_3: Skill.Components.SkillSetShortCutRender;
        shortCut_4: Skill.Components.SkillSetShortCutRender;
        shortCutList: fairygui.GGroup;
        txtDesc: fairygui.GTextField;
        iconTitleRU: fairygui.GTextField;
        btnReset: UILib.Components.button.Button11;
        btnPage1: Skill.Components.BtnPage;
        btnPage2: Skill.Components.BtnPage;
        shortCut2_1: Skill.Components.SkillSetShortCutRender;
        shortCut2_2: Skill.Components.SkillSetShortCutRender;
        shortCut2_3: Skill.Components.SkillSetShortCutRender;
        defaultIcon: fairygui.GLoader;
        specialIcon: fairygui.GLoader;
        specialGroup: fairygui.GGroup;
      },
      "tab" | "page",
      string
    >;
    type SkillSpecialWindow = __UIComponent<
      fairygui.GComponent,
      {
        curSkillName: fairygui.GTextField;
        nextSkillName: fairygui.GTextField;
        circleImg: fairygui.GImage;
        skillList: fairygui.GList;
        skillPro: Skill.Components.ProgressBar1;
        talent0: Skill.Components.SkillTalentRender;
        talent1: Skill.Components.SkillTalentRender;
        talent2: Skill.Components.SkillTalentRender;
        talentGroup: fairygui.GGroup;
        skillIcon: fairygui.GLoader;
        talentList: fairygui.GList;
        btnUpgrade: UILib.Components.button.Button11;
        costRender: UILib.Components.render.ItemCFGRender;
        costTxt: fairygui.GTextField;
        curTypeList: fairygui.GList;
        nextTypeList: fairygui.GList;
        loaderMax: fairygui.GLoader;
        curDesRender: Skill.Components.SkillDesRender;
        nextDesRender: Skill.Components.SkillDesRender;
        skillName: fairygui.GLoader;
        skillLv: fairygui.GTextField;
        loaderWxd: fairygui.GLoader;
      },
      "maxCtrl",
      string
    >;
    namespace Components {
      type SkillBtnRender = __UIComponent<
        fairygui.GButton,
        {
          bg1: fairygui.GLoader;
          bg2: fairygui.GLoader;
          skillIcon: fairygui.GLoader;
          skillLevelDes: fairygui.GTextField;
          skillName: fairygui.GTextField;
          skillLevel: fairygui.GTextField;
          red: fairygui.GImage;
        },
        "button",
        string
      >;
      type tab = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ProgressBar1 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type SkillTalentRender = __UIComponent<
        fairygui.GButton,
        { talentLoader: fairygui.GLoader; talentLv: fairygui.GTextField },
        "button",
        string
      >;
      type SkillTalentDesRender = __UIComponent<
        fairygui.GComponent,
        { txtTalentDes: fairygui.GTextField },
        string,
        string
      >;
      type SkillTypeRender = __UIComponent<fairygui.GButton, { txtName: fairygui.GTextField }, "button", string>;
      type SkillCostRender = __UIComponent<
        fairygui.GButton,
        { iconFrame: fairygui.GImage; icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
      type SkillDesRender = __UIComponent<
        fairygui.GComponent,
        { txtCost: fairygui.GTextField; txtCd: fairygui.GTextField; txtDesc: fairygui.GTextField },
        string,
        string
      >;
      type BtnPage = __UIComponent<fairygui.GButton, { title: fairygui.GLoader }, "button", string>;
      type SkillSetShortCutRender = __UIComponent<
        fairygui.GButton,
        { imgAdd: fairygui.GImage; icon: fairygui.GLoader; title: fairygui.GTextField },
        "button" | "typeCtrl",
        string
      >;
      type SkillSetSkillRender = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; yszLoader: fairygui.GLoader },
        "button",
        string
      >;
      type SkillSetItemRender = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; yszLoader: fairygui.GLoader; count: fairygui.GTextField },
        "button",
        string
      >;
      type ButtonClose = __UIComponent<fairygui.GButton, { iconButton: fairygui.GImage }, "button", string>;
      type ButtonTab = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type contentArea = __UIComponent<
        fairygui.GComponent,
        { loaderL: fairygui.GLoader; loaderR: fairygui.GLoader; close: Skill.Components.SkillBtnRender },
        string,
        string
      >;
    }
  }
  namespace Slave {
    type SlaveWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        relation: UILibFrame.Components.WindowRelationList;
        loaderTitle: fairygui.GLoader;
      },
      string,
      string
    >;
    namespace guard {
      type GuardWindow = __UIComponent<
        fairygui.GComponent,
        {
          needItem: UILib.Components.render.ItemCFGRender;
          attrList: fairygui.GList;
          starList: fairygui.GList;
          btnUpgrade: UILib.Components.button.Button11;
          costNum: fairygui.GTextField;
          txtValue1: fairygui.GTextField;
          txtValue2: fairygui.GTextField;
          imgRank: fairygui.GLoader;
          roleInView: UILib.Components.roleInView.RoleInView;
          equipList: fairygui.GList;
          imgName: fairygui.GLoader;
          btnAttack: Slave.Components.btnAttack;
          btnFollow: Slave.Components.btnAttack;
          skillList: fairygui.GList;
          txtFight: fairygui.GTextField;
          btnZh: UILib.Components.button.Button3_yellow;
          btnCz: UILib.Components.button.Button3_yellow;
        },
        "conAttack" | "conCz" | "conMax",
        string
      >;
      type GuardSkillRender = __UIComponent<
        fairygui.GComponent,
        { skill: fairygui.GLoader; skillName: fairygui.GTextField; btnJump: UILib.Components.button.ButtonLabel },
        string,
        string
      >;
    }
    namespace Components {
      type SlaveAttrRender = __UIComponent<
        fairygui.GComponent,
        { attrName: fairygui.GTextField; attrValue: fairygui.GTextField },
        string,
        string
      >;
      type btnAttack = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type btnRight = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type btnTurn = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type SlaveNextAttrRender = __UIComponent<fairygui.GComponent, { attrValue: fairygui.GTextField }, string, string>;
      type MoonGhostRender = __UIComponent<
        fairygui.GButton,
        { headLoader: fairygui.GLoader; txtName: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type ButtonThlb = __UIComponent<fairygui.GButton, { imgName: fairygui.GLoader }, string, string>;
    }
    namespace godGuard {
      type GodGuardWindow = __UIComponent<
        fairygui.GComponent,
        {
          roleInView: UILib.Components.roleInView.RoleInView;
          needItem: UILib.Components.render.ItemCFGRender;
          attrList: fairygui.GList;
          starList: fairygui.GList;
          btnUpgrade: UILib.Components.button.Button11;
          costNum: fairygui.GTextField;
          imgValue1Name: fairygui.GLoader;
          txtValue2: fairygui.GTextField;
          imgName: fairygui.GLoader;
          txtRank: fairygui.GTextField;
          btnTurn: Slave.Components.btnTurn;
          btnTurned: Slave.Components.btnTurn;
          skillIcon: fairygui.GLoader;
          headList: fairygui.GList;
          txtFight: fairygui.GTextField;
          btnThlb: Slave.Components.ButtonThlb;
        },
        "conTrun" | "conState" | "conMax",
        "t0"
      >;
      type GodGuardRender = __UIComponent<
        fairygui.GButton,
        {
          imgBg: fairygui.GImage;
          imgSelect: fairygui.GImage;
          imgName: fairygui.GLoader;
          txtRank: fairygui.GTextField;
          imgHead: fairygui.GLoader;
          red: fairygui.GImage;
        },
        "button",
        string
      >;
    }
    namespace pet {
      type PetWindow = __UIComponent<
        fairygui.GComponent,
        {
          roleInView: UILib.Components.roleInView.RoleInView;
          txtFight: fairygui.GTextField;
          needItem: UILib.Components.render.ItemCFGRender;
          attrList: fairygui.GList;
          btnUpgrade: UILib.Components.button.Button11;
          costNum: fairygui.GTextField;
          imgName: fairygui.GLoader;
          petList: fairygui.GList;
          skillList: fairygui.GList;
          btnZh: UILib.Components.button.Button11;
          btnCz: UILib.Components.button.Button11;
        },
        "conTurn",
        string
      >;
      type PetSkillRender = __UIComponent<
        fairygui.GComponent,
        { back: fairygui.GLoader; skill: fairygui.GLoader },
        string,
        string
      >;
      type PetRender = __UIComponent<
        fairygui.GButton,
        {
          imgBg: fairygui.GImage;
          imgSelect: fairygui.GImage;
          imgName: fairygui.GLoader;
          txtRank: fairygui.GTextField;
          imgHead: fairygui.GLoader;
          red: fairygui.GImage;
        },
        "button",
        string
      >;
    }
    namespace moonGhost {
      type MoonGhostWindow = __UIComponent<
        fairygui.GComponent,
        {
          headList: fairygui.GList;
          txtFight: fairygui.GTextField;
          skillIcon: fairygui.GLoader;
          skillTxtIcon: fairygui.GLoader;
          equipList: fairygui.GList;
          imgName: fairygui.GLoader;
          txtRank: fairygui.GTextField;
          attrList: fairygui.GList;
          roleInView: UILib.Components.roleInView.RoleInView;
          btnUpgrade: UILib.Components.button.Button11;
          needItem: UILib.Components.render.ItemCFGRender;
          starList: fairygui.GList;
          costNum: fairygui.GTextField;
          red: fairygui.GImage;
        },
        "maxState",
        string
      >;
    }
  }
  namespace SmallMap {
    namespace Components {
      type SignSelf = __UIComponent<fairygui.GComponent, {}, string, string>;
      type MapTeleportView = __UIComponent<
        fairygui.GComponent,
        {
          tp: fairygui.GImage;
          boss: fairygui.GImage;
          elites: fairygui.GImage;
          imgTp: fairygui.GLoader;
          monster: fairygui.GImage;
          txtNpc: fairygui.GTextField;
          txtTp: fairygui.GTextField;
          txtElites: fairygui.GTextField;
          txtMonster: fairygui.GTextField;
          txtBoss: fairygui.GTextField;
          npc: fairygui.GImage;
        },
        "c1",
        string
      >;
      type PathEndView = __UIComponent<fairygui.GComponent, { txtPos: fairygui.GTextField }, string, string>;
      type SignTeam = __UIComponent<fairygui.GComponent, { playerName: fairygui.GTextField }, string, string>;
      type MapCrossSzBzView = __UIComponent<fairygui.GComponent, { bzIcon: fairygui.GLoader }, string, string>;
      type MapCrossXFFllagView = __UIComponent<fairygui.GComponent, { bzIcon: fairygui.GLoader }, string, string>;
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button3 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button4 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type SignEnemy = __UIComponent<fairygui.GComponent, { playerName: fairygui.GTextField }, string, string>;
    }
    type SmallMapWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        txtMapName: fairygui.GTextField;
        txtPosition: fairygui.GTextField;
        btnReturn: SmallMap.Components.Button1;
        btnRandom: SmallMap.Components.Button2;
        btnRecover: SmallMap.Components.Button3;
        btnRecycle: SmallMap.Components.Button4;
        bgMap: fairygui.GLoader;
        _container: fairygui.GComponent;
        myTeleport: SmallMap.Components.SignSelf;
      },
      string,
      string
    >;
  }
  namespace Smelter {
    type SmelterWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrame; relation: UILibFrame.Components.WindowRelationList },
      string,
      string
    >;
    type SmelterComposeWindow = __UIComponent<
      fairygui.GComponent,
      {
        tabList: fairygui.GList;
        btnCompose: UILib.Components.button.Button2_Orange;
        btnAdd: UILib.Components.button.ButtonAdd;
        btnMax: UILib.Components.button.ButtonMax;
        btnMin: UILib.Components.button.ButtonMinus;
        composeTxt: fairygui.GTextField;
        cbShowOnly: UILib.Components.button.CheckBox2;
        typeList: fairygui.GList;
        composeItem: UILib.Components.render.ItemCFGRender;
        txtCost: fairygui.GTextField;
        composeCostBox: fairygui.GGroup;
        item0: Smelter.Components.ComposeRender;
        item3: Smelter.Components.ComposeRender;
        item2: Smelter.Components.ComposeRender;
        item1: Smelter.Components.ComposeRender;
        composeGroup: fairygui.GGroup;
        succMod: fairygui.GGraph;
      },
      string,
      string
    >;
    type SmelterDecomposeWindow = __UIComponent<
      fairygui.GComponent,
      {
        typeList: fairygui.GList;
        decomposeList: fairygui.GList;
        btnDecompose: UILib.Components.button.Button2_Orange;
        btnAdd: UILib.Components.button.ButtonAdd;
        btnMax: UILib.Components.button.ButtonMax;
        btnMin: UILib.Components.button.ButtonMinus;
        decomposeTxt: fairygui.GTextField;
        decomposeItem: Smelter.Components.ComposeRender;
      },
      string,
      string
    >;
    namespace Components {
      type ComposeSubTypeRender = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ComposeTypeRender = __UIComponent<
        fairygui.GButton,
        {
          clickItem: fairygui.GLoader;
          subTypeList: fairygui.GList;
          title: fairygui.GTextField;
          imgRed: fairygui.GImage;
        },
        "button",
        string
      >;
      type ComposeTabRender = __UIComponent<fairygui.GButton, { btn: UILib.Components.tab.tab_1 }, "button", string>;
      type ComposeRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.ItemCFGRender; countTxt: fairygui.GTextField; imgLock: fairygui.GImage },
        string,
        string
      >;
      type DeComposeTypeRender = __UIComponent<
        fairygui.GButton,
        {
          clickItem: fairygui.GLoader;
          subTypeList: fairygui.GList;
          title: fairygui.GTextField;
          imgRed: fairygui.GImage;
        },
        "button",
        string
      >;
      type DeComposeSubTypeRender = __UIComponent<
        fairygui.GButton,
        { item: UILib.Components.render.ItemCFGRender; txtCount: fairygui.GTextField },
        "button",
        string
      >;
    }
  }
  namespace SuitNotice {
    type SuitNoticeWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILib.Components.button.ButtonClose1;
        equipList: fairygui.GList;
        txtName: fairygui.GTextField;
        attrList: fairygui.GList;
      },
      string,
      string
    >;
    type SuitAttrRender = __UIComponent<fairygui.GComponent, { txtAttr: fairygui.GTextField }, string, string>;
  }
  namespace SuitPK {
    type TzJlWindow = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        left: fairygui.GImage;
        right: fairygui.GImage;
        time: fairygui.GTextField;
        explain: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace component {
      type TaoZhuangRender = __UIComponent<
        fairygui.GComponent,
        {
          getBtn: SuitPK.component.Button1;
          equip1: UILib.Components.render.RewardRender;
          equip2: UILib.Components.render.RewardRender;
          listItem: fairygui.GList;
          redPoint: fairygui.GImage;
        },
        "con",
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace Surprise {
    type SurpriseSingleWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILib.Components.button.ButtonClose1;
        imgDesc: fairygui.GLoader;
        rewardList: fairygui.GList;
        txtRecharge: fairygui.GTextField;
        txtTime: fairygui.GTextField;
        roleInView: UILib.Components.roleInView.RoleInView;
        btnRecharge: Surprise.Compontents.btnRecharge;
        btnGet: Surprise.Compontents.btnRecharge;
      },
      "conState",
      string
    >;
    type SurpriseWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILib.Components.button.ButtonClose1;
        imgDesc: fairygui.GLoader;
        rewardList1: fairygui.GList;
        imgModel: fairygui.GLoader;
        txtRecharge: fairygui.GTextField;
        txtTime: fairygui.GTextField;
        roleInView: UILib.Components.roleInView.RoleInView;
        typeList: fairygui.GList;
        btnRecharge: UILib.Components.button.Button111;
        btnGet: UILib.Components.button.Button111;
        rewardList2: fairygui.GList;
      },
      "conState",
      string
    >;
    type SurpriseRender = __UIComponent<
      fairygui.GButton,
      { imgIcon: fairygui.GLoader; txtName: fairygui.GTextField; redPoint: fairygui.GImage },
      "button",
      string
    >;
    namespace Compontents {
      type btnLeft = __UIComponent<fairygui.GButton, {}, "button", string>;
      type btnRecharge = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type ItemRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.RewardRender2; imgMark: fairygui.GLoader },
        string,
        string
      >;
    }
  }
  namespace SysSetting {
    type SysSettingWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrameTwo; relation: UILibFrame.Components.WindowRelationList },
      string,
      string
    >;
    type SysBaseWindow = __UIComponent<
      fairygui.GComponent,
      {
        baseCom: SysSetting.Components.BaseCom;
        btnChang: UILib.Components.button.Button2_Blue;
        btnExit: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
    type SysPickUpWindow = __UIComponent<fairygui.GComponent, { pickList: fairygui.GList }, string, string>;
    type SysFightWindow = __UIComponent<
      fairygui.GComponent,
      {
        btn_hp: SysSetting.Components.CheckBox;
        btn_hp2: SysSetting.Components.CheckBox;
        btn_mp: SysSetting.Components.CheckBox;
        btn_auto_buy: SysSetting.Components.CheckBox;
        slider_hp: SysSetting.Components.Slider1;
        slider_hp2: SysSetting.Components.Slider1;
        txt_hp: fairygui.GTextField;
        txt_mp: fairygui.GTextField;
        txt_hp2: fairygui.GTextField;
        skillList: fairygui.GList;
        slider_mp: SysSetting.Components.Slider1;
        comboBox_hp: UILib.Components.combobox.ComboBox2;
        comboBox_mp: UILib.Components.combobox.ComboBox2;
        comboBox_hp2: UILib.Components.combobox.ComboBox2;
      },
      string,
      string
    >;
    type SysHigherSetWindow = __UIComponent<
      fairygui.GComponent,
      {
        btn_auto_hangUp: SysSetting.Components.CheckBox;
        btn_dead: SysSetting.Components.CheckBox;
        btn_clear_dead: UILib.Components.button.Button2_Orange;
        input_dead: fairygui.GTextField;
        txt_already_dead: fairygui.GTextField;
        combo_auto_hangUp: UILib.Components.combobox.ComboBox2;
        combo_dead: UILib.Components.combobox.ComboBox2;
        btn_cur_screen: SysSetting.Components.CheckBox2;
        btn_limit_screen: SysSetting.Components.CheckBox2;
        btn_all_screen: SysSetting.Components.CheckBox2;
      },
      "rangeCtrl",
      string
    >;
    namespace Components {
      type Slider1_grip = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Slider1 = __UIComponent<
        fairygui.GSlider,
        { bar: fairygui.GImage; grip: SysSetting.Components.Slider1_grip },
        string,
        string
      >;
      type CheckBox = __UIComponent<fairygui.GButton, {}, "button", string>;
      type CheckBox2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type BaseCom = __UIComponent<
        fairygui.GComponent,
        {
          btn_simple_monster: SysSetting.Components.CheckBox;
          btn_shield_shake: SysSetting.Components.CheckBox;
          btn_shield_music: SysSetting.Components.CheckBox;
          btn_shield_audio: SysSetting.Components.CheckBox;
          btn_hide_bossName: SysSetting.Components.CheckBox;
          btn_hide_monsterName: SysSetting.Components.CheckBox;
          btnShield_player: SysSetting.Components.CheckBox;
          btnShield_guild: SysSetting.Components.CheckBox;
          btnShield_team: SysSetting.Components.CheckBox;
          btnShield_camp: SysSetting.Components.CheckBox;
          btnShield_title: SysSetting.Components.CheckBox;
          btnShield_other_call: SysSetting.Components.CheckBox;
          btnShield_wing: SysSetting.Components.CheckBox;
          btnShield_monster: SysSetting.Components.CheckBox;
          btnShield_skillEffect: SysSetting.Components.CheckBox;
          btnShield_my_call: SysSetting.Components.CheckBox;
          btnShield_auto_op: SysSetting.Components.CheckBox;
          btn_auto_ride: SysSetting.Components.CheckBox;
          btnShield_magic: SysSetting.Components.CheckBox;
          btnShield_halo: SysSetting.Components.CheckBox;
          btn_shield_other_name: SysSetting.Components.CheckBox;
        },
        string,
        "t0"
      >;
    }
    namespace Components.Render {
      type SysPickRender = __UIComponent<
        fairygui.GComponent,
        { txtDesc: fairygui.GTextField; combo_rank: UILib.Components.combobox.ComboBox2 },
        string,
        string
      >;
      type SysSkillRender = __UIComponent<
        fairygui.GButton,
        { bg: fairygui.GImage; icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
    }
  }
  namespace Talisman {
    type TalismanWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        commonView: Wing.ExternCommonWindow;
      },
      string,
      string
    >;
  }
  namespace Task {
    type TaskWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonTipsClose;
        imgDrop: fairygui.GLoader;
        TaskGuideDialog_btnAccept: UILib.Components.button.Button2_Orange;
        taskIntro: fairygui.GTextField;
        rewardList: fairygui.GList;
        txtName: fairygui.GTextField;
      },
      string,
      string
    >;
    type DailyTaskTransferDialog = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        taskIntro: fairygui.GTextField;
        transfer: UILib.Components.button.Button2_Orange;
        closeWindow: UILib.Components.button.Button2_Red;
      },
      string,
      string
    >;
    type TaskPracticeRoomWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        imgDrop: fairygui.GLoader;
        TaskGuideDialog_btnAccept: UILib.Components.button.Button2_Orange;
        lblDsc: fairygui.GTextField;
        rewardList: fairygui.GList;
      },
      string,
      string
    >;
    namespace components {
      type Button1 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; icon: fairygui.GLoader },
        "button",
        string
      >;
      type rewardGetBtn = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GImage; comBtnEffect: fairygui.GGraph; title: fairygui.GTextField },
        "button",
        string
      >;
    }
  }
  namespace TaskSlayer {
    type TaskSlayerWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtContent: fairygui.GTextField;
        awradList: fairygui.GList;
        txtLastCount: fairygui.GTextField;
        btnPrivilege: TaskSlayer.Components.ButtonTxt;
        txtDesc: fairygui.GTextField;
        btnAccept: UILib.Components.button.Button2_Orange;
        btnInstComp: UILib.Components.button.Button2_Orange;
        txtInstComp: fairygui.GTextField;
        btnGetAward: UILib.Components.button.Button2_Orange;
        btnDoubleGet: UILib.Components.button.Button2_Orange;
        txtDoubleGet: fairygui.GTextField;
        btnGo: UILib.Components.button.Button2_Orange;
        close: UILib.Components.button.ButtonClose1;
      },
      "stateCon" | "con",
      string
    >;
    namespace Components {
      type ButtonTxt = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type TaskSlayerRender = __UIComponent<
        fairygui.GButton,
        { render: UILib.Components.render.RewardRender2; imgSpecial: fairygui.GLoader },
        "button",
        string
      >;
    }
  }
  namespace Team {
    type TeamWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        title: fairygui.GLoader;
        relation: UILibFrame.Components.WindowRelationList;
      },
      string,
      string
    >;
    type TeamMemberWindow = __UIComponent<
      fairygui.GComponent,
      {
        memberList: fairygui.GList;
        teamState: Team.Components.TeamStateView;
        CreateBtn: UILib.Components.button.Button2_Blue;
        recruitBtn: UILib.Components.button.Button2_Orange;
        rightArrow: UILib.Components.button.ButtonArrow;
        leftArrow: UILib.Components.button.ButtonArrow;
        lblTeamNum: fairygui.GTextField;
        requireJoinBtn: UILib.Components.button.Button2_Orange;
        DissolveBtn: UILib.Components.button.Button2_Orange;
        ExitBtn: UILib.Components.button.Button2_Orange;
        combo_team_type: UILib.Components.combobox.ComboBox2;
      },
      "memberType",
      string
    >;
    type NearTeamWindow = __UIComponent<
      fairygui.GComponent,
      {
        refreshListBtn: UILib.Components.button.Button2_Orange;
        joinTeamBtn: UILib.Components.button.Button2_Orange;
        createTeam: UILib.Components.button.Button2_Blue;
        nearTeamList: fairygui.GList;
        teamState: Team.Components.TeamStateView;
      },
      string,
      string
    >;
    type RequireJoinTeamWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        requireList: fairygui.GList;
        allRefuse: UILib.Components.button.Button2_Blue;
        allAgree: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
    type InviteTeamWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameTwo;
        allRefuse: UILib.Components.button.Button2_Blue;
        requireList: fairygui.GList;
      },
      string,
      string
    >;
    type NearPlayerWindow = __UIComponent<
      fairygui.GComponent,
      {
        refreshListBtn: UILib.Components.button.Button2_Orange;
        joinTeamBtn: UILib.Components.button.Button2_Orange;
        nearRoleList: fairygui.GList;
        teamState: Team.Components.TeamStateView;
        inviteTeamBtn: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
    type ServerTeamWindow = __UIComponent<
      fairygui.GComponent,
      {
        refreshBtn: UILib.Components.button.Button2_Orange;
        requireJoinBtn: UILib.Components.button.Button2_Orange;
        teamList: fairygui.GList;
        teamState: Team.Components.TeamStateView;
        combo_team_type: UILib.Components.combobox.ComboBox2;
        createTeamBtn: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
    type MemberOperationWindow = __UIComponent<fairygui.GComponent, { btnList: fairygui.GList }, string, string>;
    namespace Render {
      type TeamMemberRender = __UIComponent<
        fairygui.GButton,
        {
          roleName: fairygui.GTextField;
          txtJob: fairygui.GTextField;
          position: fairygui.GTextField;
          roleInView: UILib.Components.roleInView.RoleInView;
          leaderIcon: fairygui.GLoader;
          txtLv: fairygui.GTextField;
        },
        "button",
        string
      >;
      type NearTeamRender = __UIComponent<
        fairygui.GButton,
        { LearderName: fairygui.GTextField; Lv: fairygui.GTextField; MemberCount: fairygui.GTextField },
        "button",
        string
      >;
      type RequireJoinTeamRender = __UIComponent<
        fairygui.GComponent,
        {
          roleName: fairygui.GTextField;
          headIcon: fairygui.GLoader;
          reduceBtn: UILib.Components.button.Button2_Blue;
          addBtn: UILib.Components.button.Button2_Orange;
          level: fairygui.GTextField;
        },
        string,
        string
      >;
      type InviteTeamRender = __UIComponent<
        fairygui.GComponent,
        {
          roleName: fairygui.GTextField;
          headIcon: fairygui.GLoader;
          reduceBtn: UILib.Components.button.Button2_Blue;
          addBtn: UILib.Components.button.Button2_Orange;
          level: fairygui.GTextField;
        },
        string,
        string
      >;
      type NearRoleRender = __UIComponent<
        fairygui.GButton,
        {
          RoleName: fairygui.GTextField;
          Lv: fairygui.GTextField;
          GangName: fairygui.GTextField;
          TeamName: fairygui.GTextField;
        },
        "button" | "comBg",
        string
      >;
      type ServerTeamRender = __UIComponent<
        fairygui.GButton,
        {
          LearderName: fairygui.GTextField;
          Lv: fairygui.GTextField;
          MemberCount: fairygui.GTextField;
          Type: fairygui.GTextField;
        },
        "button" | "comBg",
        string
      >;
    }
    namespace Components {
      type addBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type reduceBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
      type rdo = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type TeamStateView = __UIComponent<
        fairygui.GComponent,
        {
          allCheck: Team.Components.rdo;
          gangCheck: Team.Components.rdo;
          noCheck: Team.Components.rdo;
          joinState: fairygui.GGroup;
        },
        "state",
        string
      >;
    }
  }
  namespace ThirtyDollarBuy {
    type ThirtyDollarBuyWindow = __UIComponent<
      fairygui.GComponent,
      {
        bgLoader: fairygui.GLoader;
        item: UILib.Components.render.RewardRender1;
        txtLastTime: fairygui.GTextField;
        close: UILibFrame.Components.ButtonCloseBiz;
        btnBuy: ThirtyDollarBuy.Button1;
        txtGet: fairygui.GTextField;
      },
      string,
      string
    >;
    type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
  }
  namespace ThreeDay {
    namespace Component {
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ThreeDayTabRender = __UIComponent<fairygui.GButton, { txtDay: fairygui.GTextField }, "button", string>;
      type Button3 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
    type ThreeDayWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnCharge: ThreeDay.Component.Button2;
        btnGet: ThreeDay.Component.Button3;
        roleInViewL: UILib.Components.roleInView.RoleInView;
        roleInViewR: UILib.Components.roleInView.RoleInView;
        listTab: fairygui.GList;
        listAward: fairygui.GList;
        close: ThreeDay.Component.Button1;
        imgGet: fairygui.GImage;
      },
      string,
      string
    >;
  }
  namespace TouchGift {
    type TouchGiftWindow = __UIComponent<
      fairygui.GComponent,
      {
        awardList: fairygui.GList;
        txtOldPrice: fairygui.GTextField;
        txtNowPrice: fairygui.GTextField;
        btnBuy: UILib.Components.button.Button11;
        zhong2: fairygui.GTextField;
        txtTimes: fairygui.GTextField;
        listTab: fairygui.GList;
        btnL: TouchGift.Component.ButtonL;
        btnR: TouchGift.Component.ButtonR;
        close: UILib.Components.button.ButtonClose1;
        zhong22: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Component {
      type TouchGiftRender = __UIComponent<
        fairygui.GButton,
        { txtName: fairygui.GTextField; imgIcon: fairygui.GLoader },
        "button",
        string
      >;
      type ButtonL = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonR = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace Treasure {
    type TreasureWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonClose;
        btnCom: UILib.Components.tab.tab_10;
        btnStorage: UILib.Components.tab.tab_10;
        btnExchange: UILib.Components.tab.tab_10;
      },
      "conTab",
      string
    >;
    type TreasureComWindow = __UIComponent<
      fairygui.GComponent,
      {
        sItem0: Treasure.Component.RewardSRender;
        sItem1: Treasure.Component.RewardSRender;
        sItem2: Treasure.Component.RewardSRender;
        sItem3: Treasure.Component.RewardSRender;
        sItem4: Treasure.Component.RewardSRender;
        sItem5: Treasure.Component.RewardSRender;
        sItem6: Treasure.Component.RewardSRender;
        sItem10: Treasure.Component.RewardSRender;
        sItem11: Treasure.Component.RewardSRender;
        sItem12: Treasure.Component.RewardSRender;
        sItem13: Treasure.Component.RewardSRender;
        sItem7: Treasure.Component.RewardSRender;
        sItem8: Treasure.Component.RewardSRender;
        sItem9: Treasure.Component.RewardSRender;
        sRewardList: fairygui.GGroup;
        item0: Treasure.Component.RewardBRender;
        item1: Treasure.Component.RewardBRender;
        item2: Treasure.Component.RewardBRender;
        item3: Treasure.Component.RewardBRender;
        bRewardList: fairygui.GGroup;
        mapList: fairygui.GList;
        txtScores: fairygui.GTextField;
        txtCount: fairygui.GTextField;
        btnSeek1: UILib.Components.button.Button11;
        btnSeek10: UILib.Components.button.Button11;
        btnSeek50: UILib.Components.button.Button11;
        txtSeek1: fairygui.GTextField;
        txtSeek10: fairygui.GTextField;
        txtSeek50: fairygui.GTextField;
        txtSeekCount: fairygui.GTextField;
        btnBox: Treasure.Component.btnBox;
        bar: Treasure.Component.treasureBar;
        chkAutoBuy: UILib.Components.button.CheckBox1;
        txtItem: fairygui.GTextField;
        txtItemCount: fairygui.GTextField;
        btnRecharge: UILib.Components.button.ButtonAdd2;
        btnRule: Treasure.Component.btnRule;
        ownLogList: fairygui.GList;
        allLogList: fairygui.GList;
        txtTreasure: fairygui.GTextField;
      },
      "conLog",
      string
    >;
    type TreasureStorageWindow = __UIComponent<
      fairygui.GComponent,
      {
        storageList: fairygui.GList;
        btnGet: UILib.Components.button.Button2_Orange;
        txtScores: fairygui.GTextField;
        txtCount: fairygui.GTextField;
        txtItem: fairygui.GTextField;
        txtItemCount: fairygui.GTextField;
        btnRecharge: UILib.Components.button.ButtonAdd2;
        txtStorageCount: fairygui.GTextField;
        btnRecycle: UILib.Components.button.Button2_Green;
        btnTidy: UILib.Components.button.Button2_Orange;
      },
      string,
      string
    >;
    type TreasureExchangeWindow = __UIComponent<
      fairygui.GComponent,
      {
        exchangeList: fairygui.GList;
        logList: fairygui.GList;
        txtScores: fairygui.GTextField;
        txtGo: fairygui.GRichTextField;
        btnWeapon: UILib.Components.tab.tab_1;
        btnClothes: UILib.Components.tab.tab_1;
        btnEquip: UILib.Components.tab.tab_1;
        btnOther: UILib.Components.tab.tab_1;
      },
      "conType",
      string
    >;
    type TreasureDailyWindow = __UIComponent<fairygui.GComponent, { dailyList: fairygui.GList }, string, string>;
    type TreasureRewardWindow = __UIComponent<
      fairygui.GComponent,
      {
        close: UILibFrame.Components.ButtonClose;
        rewardList: fairygui.GList;
        btnCheck: UILib.Components.button.CheckBox2;
      },
      string,
      string
    >;
    namespace Component {
      type RewardSRender = __UIComponent<
        fairygui.GComponent,
        {
          item: UILib.Components.render.RewardRenderSmall;
          txtDesc: fairygui.GTextField;
          txtCount: fairygui.GTextField;
        },
        string,
        string
      >;
      type RewardBRender = __UIComponent<
        fairygui.GComponent,
        { txtDesc: fairygui.GTextField; txtCount: fairygui.GTextField; item: UILib.Components.render.RewardRender },
        string,
        string
      >;
      type MapRender = __UIComponent<
        fairygui.GComponent,
        {
          txtMapName: fairygui.GTextField;
          txtCount: fairygui.GTextField;
          btnEnter: UILib.Components.button.Button2_Orange;
        },
        string,
        string
      >;
      type LogRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtItem: fairygui.GRichTextField },
        string,
        string
      >;
      type btnBox = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type StorageRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.ItemCFGRender; txtCount: fairygui.GTextField },
        string,
        string
      >;
      type ExchangeRender = __UIComponent<
        fairygui.GComponent,
        {
          item: UILib.Components.render.RewardRender;
          txtName: fairygui.GTextField;
          txtNeed: fairygui.GTextField;
          btnExchange: UILib.Components.button.Button2_Orange;
        },
        string,
        string
      >;
      type treasureBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type btnRule = __UIComponent<fairygui.GButton, {}, "button", string>;
      type MyLogRender = __UIComponent<fairygui.GComponent, { txtItem: fairygui.GRichTextField }, string, string>;
      type DilyRender = __UIComponent<
        fairygui.GComponent,
        { txtCount: fairygui.GTextField; txtState: fairygui.GTextField; txtItem: fairygui.GTextField },
        string,
        string
      >;
    }
  }
  namespace TreasureFlashUp {
    type TreasureFlashUpWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrameActivity;
        titleLoader: fairygui.GLoader;
        desLoader: fairygui.GLoader;
        list: fairygui.GList;
        txtOriginalPrice: fairygui.GTextField;
        txtNowPrice: fairygui.GTextField;
        btnBuy: TreasureFlashUp.Component.Button1;
        txtStep: fairygui.GTextField;
        txtLv: fairygui.GTextField;
        txtLastTime: fairygui.GTextField;
      },
      "priceCon" | "costCon",
      string
    >;
    namespace Component {
      type Button1 = __UIComponent<fairygui.GButton, { imgSale: fairygui.GLoader }, "button", string>;
      type TreasureFlashUpRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; item: UILib.Components.render.RewardRender2 },
        string,
        string
      >;
    }
  }
  namespace TreasureHunter {
    type TreasureHunterWindow = __UIComponent<
      fairygui.GComponent,
      { contentArea: UILibFrame.Components.comFrameActivity; list: fairygui.GList },
      string,
      string
    >;
    namespace Component {
      type TreasureHunterRender = __UIComponent<
        fairygui.GComponent,
        {
          lsList: fairygui.GList;
          txtLSCost: fairygui.GTextField;
          btnLS: UILib.Components.button.Button15;
          txtLSDrop: fairygui.GTextField;
          txtLS: fairygui.GTextField;
          yjList: fairygui.GList;
          txtYJCost: fairygui.GTextField;
          btnYJ: TreasureHunter.Component.Button1;
          txtYJ: fairygui.GTextField;
          txtHour: fairygui.GTextField;
          txtMinute: fairygui.GTextField;
          txtSecond: fairygui.GTextField;
          yjTimeGroup: fairygui.GGroup;
        },
        "con",
        string
      >;
      type TreasureHunterLsAttrRender = __UIComponent<
        fairygui.GComponent,
        { txtAttr: fairygui.GTextField },
        string,
        string
      >;
      type TreasureHunterYjAttrRender = __UIComponent<
        fairygui.GComponent,
        { txtAttr: fairygui.GTextField },
        string,
        string
      >;
      type Button1 = __UIComponent<fairygui.GButton, {}, "button", string>;
    }
  }
  namespace TreasureMap {
    type TreasureMapWindow = __UIComponent<
      fairygui.GComponent,
      {
        bg: fairygui.GLoader;
        itemList: fairygui.GList;
        bar: TreasureMap.Components.progressBar_yellow;
        mapName: fairygui.GTextField;
        mapPonit: fairygui.GTextField;
        btnGoTo: UILib.Components.button.Button2_Orange;
        close: UILib.Components.button.ButtonClose1;
        imgTitle: fairygui.GLoader;
      },
      "beginState" | "barState",
      string
    >;
    type TreasureMapAwardWindow = __UIComponent<
      fairygui.GComponent,
      { rewardList: fairygui.GList; btnSucceedSure: UILib.Components.button.Button2_Orange },
      string,
      string
    >;
    namespace Components {
      type progressBar_yellow = __UIComponent<
        fairygui.GProgressBar,
        { bar: TreasureMap.Components.bar_yellow; barTitle: fairygui.GTextField },
        string,
        string
      >;
      type bar_yellow = __UIComponent<fairygui.GComponent, {}, string, string>;
      type TreasureMapRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.RewardRender },
        string,
        string
      >;
    }
  }
  namespace UILib {
    namespace Components.render {
      type BagRender = __UIComponent<
        fairygui.GButton,
        { back: fairygui.GLoader; quality: fairygui.GLoader; imgIcon: fairygui.GLoader; imgLock: fairygui.GLoader },
        "conType",
        string
      >;
      type EquipRender = __UIComponent<
        fairygui.GButton,
        {
          back: fairygui.GLoader;
          icon: fairygui.GLoader;
          quality: fairygui.GLoader;
          itemIcon: fairygui.GLoader;
          selecte: fairygui.GImage;
          txtStr: fairygui.GTextField;
          redImg: fairygui.GImage;
        },
        string,
        string
      >;
      type RewardRender = __UIComponent<
        fairygui.GButton,
        { back: fairygui.GLoader; quality: fairygui.GLoader; imgIcon: fairygui.GLoader },
        string,
        string
      >;
      type FaceRender = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type ItemCFGRender = __UIComponent<
        fairygui.GButton,
        { back: fairygui.GLoader; quality: fairygui.GLoader; imgIcon: fairygui.GLoader },
        string,
        string
      >;
      type ItemCustomRender = __UIComponent<
        fairygui.GButton,
        {
          bg: fairygui.GImage;
          quality: fairygui.GLoader;
          icon: fairygui.GLoader;
          itemIcon: fairygui.GLoader;
          selecte: fairygui.GImage;
          redImg: fairygui.GImage;
        },
        string,
        string
      >;
      type StartRender = __UIComponent<fairygui.GComponent, { loaderStart: fairygui.GLoader }, "conIsLight", string>;
      type RewardImgRender = __UIComponent<
        fairygui.GComponent,
        { itemRender: UILib.Components.render.RewardRender; nopay: fairygui.GLoader },
        "iconState",
        string
      >;
      type RewardRender1 = __UIComponent<
        fairygui.GButton,
        { back: fairygui.GLoader; quality: fairygui.GLoader; imgIcon: fairygui.GLoader },
        string,
        string
      >;
      type SkillRender = __UIComponent<
        fairygui.GComponent,
        { bg: fairygui.GLoader; imgIcon: fairygui.GLoader; title: fairygui.GTextField },
        string,
        string
      >;
      type StarRender = __UIComponent<fairygui.GComponent, { loaderStart: fairygui.GLoader }, "conIsLight", string>;
      type RewardRender2 = __UIComponent<
        fairygui.GButton,
        { back: fairygui.GLoader; quality: fairygui.GLoader; imgIcon: fairygui.GLoader },
        string,
        string
      >;
      type HolyBeastRender = __UIComponent<
        fairygui.GButton,
        { quality: fairygui.GLoader; icon: fairygui.GLoader; itemIcon: fairygui.GLoader; equipMod: fairygui.GGraph },
        string,
        string
      >;
      type RewardRenderSmall = __UIComponent<
        fairygui.GButton,
        { back: fairygui.GLoader; quality: fairygui.GLoader; imgIcon: fairygui.GLoader },
        string,
        string
      >;
    }
    namespace Components.money {
      type MoneyView = __UIComponent<
        fairygui.GComponent,
        {
          com100: UILib.Components.money.MoneyItem;
          com102: UILib.Components.money.MoneyItem;
          com101: UILib.Components.money.MoneyItem;
          com209: UILib.Components.money.MoneyItem;
        },
        string,
        string
      >;
      type MoneyItem = __UIComponent<
        fairygui.GButton,
        { iconBg: fairygui.GImage; icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
    }
    namespace Components.tab {
      type tab_1 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
      type tab_3 = __UIComponent<
        fairygui.GButton,
        { redPoint: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type tab_0 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; titleDown: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
      type tab_4 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; redPoint: fairygui.GImage; icon: fairygui.GLoader },
        "button",
        string
      >;
      type tab_5 = __UIComponent<
        fairygui.GButton,
        {
          title: fairygui.GTextField;
          titleDown: fairygui.GTextField;
          redPoint: fairygui.GImage;
          icon: fairygui.GLoader;
        },
        "button",
        string
      >;
      type tab_6 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; titleDown: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
      type tab_10 = __UIComponent<
        fairygui.GButton,
        { titleDown: fairygui.GTextField; title: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
      type tab_11 = __UIComponent<
        fairygui.GButton,
        { titleDown: fairygui.GTextField; title: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
      type tab_12 = __UIComponent<
        fairygui.GButton,
        { titleDown: fairygui.GTextField; title: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
    }
    namespace Components.button {
      type CheckBox1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonPage1 = __UIComponent<
        fairygui.GButton,
        { icon1: fairygui.GImage; icon0: fairygui.GImage },
        "button",
        string
      >;
      type ButtonText = __UIComponent<fairygui.GButton, { title: fairygui.GRichTextField }, "button", string>;
      type Button6 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type ButtonMinus = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonAdd = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonMax = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonHelp = __UIComponent<fairygui.GButton, {}, "button", string>;
      type CheckBox2 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type Button8 = __UIComponent<
        fairygui.GButton,
        { iconButton: fairygui.GImage; title: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type Button2_Blue = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type Button2_Green = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type Button2_Orange = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type Button9 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type ButtonGetWay = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button2_Red = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type ButtonArrow = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button8_small = __UIComponent<
        fairygui.GButton,
        { iconButton: fairygui.GImage; title: fairygui.GTextField; comBtnEffect: fairygui.GGraph },
        "button",
        string
      >;
      type Button9_small = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; comBtnEffect: fairygui.GGraph },
        "button",
        string
      >;
      type CheckBox3 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ButtonClose = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button10 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ButtonClose1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonMax1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonMin = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonClose2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonAdd1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonMinus1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonAdd3 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonArrow1 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonSearch = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonAdd2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button11 = __UIComponent<
        fairygui.GButton,
        { iconButton: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type Button12 = __UIComponent<
        fairygui.GButton,
        { iconButton: fairygui.GImage; title: fairygui.GTextField; comBtnEffect: fairygui.GGraph },
        "button",
        string
      >;
      type Button13 = __UIComponent<
        fairygui.GButton,
        { iconButton: fairygui.GImage; title: fairygui.GTextField; comBtnEffect: fairygui.GGraph },
        "button",
        string
      >;
      type ButtonAdd4 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonMinus2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button111 = __UIComponent<
        fairygui.GButton,
        { iconButton: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type ButtonMax2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonMin2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button14 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type Button15 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ButtonArrow2 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button16 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonLabel = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type Button17 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type Button14_1 = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type Button14_s = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ButtonExit = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonAdd5 = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Button3_blue = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type Button3_green = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type Button3_yellow = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
    }
    namespace Components.progressBar {
      type progressBar_yellow = __UIComponent<
        fairygui.GProgressBar,
        { bar: UILib.Components.progressBar.bar_yellow; title: fairygui.GTextField },
        string,
        string
      >;
      type progressBar_green = __UIComponent<
        fairygui.GProgressBar,
        { bar: UILib.Components.progressBar.bar_green; title: fairygui.GTextField },
        string,
        string
      >;
      type progressBar_white = __UIComponent<
        fairygui.GProgressBar,
        { bar: UILib.Components.progressBar.bar_white },
        string,
        string
      >;
      type bar_green = __UIComponent<fairygui.GComponent, {}, string, string>;
      type bar_white = __UIComponent<fairygui.GComponent, {}, string, string>;
      type bar_yellow = __UIComponent<fairygui.GComponent, {}, string, string>;
      type ProgressBar3 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type ProgressBar4 = __UIComponent<fairygui.GProgressBar, { bar: fairygui.GImage }, string, string>;
    }
    namespace Components.back {
      type comTitle = __UIComponent<
        fairygui.GButton,
        { iconFL: fairygui.GImage; iconFR: fairygui.GImage; icon: fairygui.GLoader },
        string,
        string
      >;
      type comTaskTitle = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type comYellowTitle = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
    }
    namespace Components.combobox {
      type ComboBox1_item = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ComboBox1_popup = __UIComponent<fairygui.GComponent, { list: fairygui.GList }, string, string>;
      type ComboBox1 = __UIComponent<fairygui.GComboBox, { title: fairygui.GRichTextField }, "button", string>;
      type TypeSelecte = __UIComponent<fairygui.GComboBox, { title: fairygui.GTextField }, "button", string>;
      type TypeSelecte_item = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type TypeSelecte_popup = __UIComponent<fairygui.GComponent, { list: fairygui.GList }, string, string>;
      type ComboBox2 = __UIComponent<fairygui.GComboBox, { title: fairygui.GRichTextField }, "button", string>;
      type ComboBox2_item = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ComboBox2_popup = __UIComponent<fairygui.GComponent, { list: fairygui.GList }, string, string>;
    }
    namespace Components.attrRender {
      type AttrRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtValue: fairygui.GTextField },
        string,
        string
      >;
      type AttrBgRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField; txtValue: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace Components.roleInView {
      type RoleInView = __UIComponent<fairygui.GComponent, { roleGraph: fairygui.GGraph }, string, string>;
    }
    namespace Components.DisLimit {
      type DisLimitView = __UIComponent<
        fairygui.GComponent,
        { btnWindow: UILib.Components.DisLimit.ButtonDisLimit; txtTime: fairygui.GTextField },
        string,
        string
      >;
      type ButtonDisLimit = __UIComponent<
        fairygui.GButton,
        { iconFrame: fairygui.GImage; iconBack: fairygui.GImage },
        "button",
        string
      >;
    }
    namespace Components.slider {
      type Slider1_grip = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Slider1 = __UIComponent<
        fairygui.GSlider,
        { bar: UILib.Components.slider.comSlider1; grip: UILib.Components.slider.Slider1_grip },
        string,
        string
      >;
      type comSlider1 = __UIComponent<fairygui.GComponent, { iconBack: fairygui.GImage }, string, string>;
      type comSilder2 = __UIComponent<fairygui.GComponent, { iconBack: fairygui.GImage }, string, string>;
      type Slider2_grip = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Slider2 = __UIComponent<
        fairygui.GSlider,
        { bar: UILib.Components.slider.comSilder2; grip: UILib.Components.slider.Slider2_grip },
        string,
        string
      >;
    }
    namespace Components.progressbar {
      type bar_green = __UIComponent<fairygui.GComponent, {}, string, string>;
      type bar_white = __UIComponent<fairygui.GComponent, {}, string, string>;
      type bar_yellow = __UIComponent<fairygui.GComponent, {}, string, string>;
      type ProgressBar3 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type ProgressBar4 = __UIComponent<fairygui.GProgressBar, { bar: fairygui.GImage }, string, string>;
      type progressBar_green = __UIComponent<
        fairygui.GProgressBar,
        { bar: UILib.Components.progressBar.bar_green; title: fairygui.GTextField },
        string,
        string
      >;
      type progressBar_white = __UIComponent<
        fairygui.GProgressBar,
        { bar: UILib.Components.progressBar.bar_white },
        string,
        string
      >;
      type progressBar_yellow = __UIComponent<
        fairygui.GProgressBar,
        { bar: UILib.Components.progressBar.bar_yellow; title: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace Components.tips {
      type PassiveSkillTipWindow = __UIComponent<
        fairygui.GComponent,
        {
          thump_skill: fairygui.GImage;
          txtName: fairygui.GRichTextField;
          txtLevel: fairygui.GTextField;
          txtDesc: fairygui.GRichTextField;
          txtCost: fairygui.GTextField;
          txtCd: fairygui.GTextField;
          txtTile: fairygui.GTextField;
          itemRender: UILib.Components.render.SkillRender;
          txtType: fairygui.GTextField;
        },
        string,
        string
      >;
      type SkillCFGTip = __UIComponent<
        fairygui.GComponent,
        {
          itemRender: UILib.Components.render.SkillRender;
          txtName: fairygui.GRichTextField;
          txtLevel: fairygui.GTextField;
          txtDesc: fairygui.GRichTextField;
          txtCost: fairygui.GTextField;
          txtCd: fairygui.GTextField;
          txtTalent: fairygui.GRichTextField;
          txtTile: fairygui.GTextField;
          txtType: fairygui.GTextField;
        },
        string,
        string
      >;
      type SkillTalentTipWindow = __UIComponent<
        fairygui.GComponent,
        {
          txtName: fairygui.GRichTextField;
          txtDesc: fairygui.GRichTextField;
          txtBelong: fairygui.GTextField;
          txtLv: fairygui.GTextField;
          txtTile: fairygui.GTextField;
          bg: fairygui.GLoader;
          imgIcon: fairygui.GLoader;
          txtType: fairygui.GTextField;
        },
        string,
        string
      >;
      type PassiveSkillExtraTipWindow = __UIComponent<
        fairygui.GComponent,
        {
          skillBg: fairygui.GImage;
          txtDesc: fairygui.GRichTextField;
          txtNextDesc: fairygui.GRichTextField;
          txtTile: fairygui.GTextField;
          txtName: fairygui.GRichTextField;
          txtLevel: fairygui.GTextField;
          txtCost: fairygui.GTextField;
          txtCd: fairygui.GTextField;
          itemRender: UILib.Components.render.SkillRender;
          txtType: fairygui.GTextField;
        },
        string,
        string
      >;
    }
    namespace Components.guardView {
      type GuardRender = __UIComponent<
        fairygui.GComponent,
        { back: fairygui.GLoader; imgIcon: fairygui.GLoader },
        string,
        string
      >;
      type GuardView = __UIComponent<
        fairygui.GComponent,
        { equipL: UILib.Components.guardView.GuardRender; equipD: UILib.Components.guardView.GuardRender },
        string,
        string
      >;
    }
  }
  namespace UILibArtFont {}
  namespace UILibBGNew {}
  namespace UILibFrame {
    namespace Components {
      type ButtonClose = __UIComponent<fairygui.GButton, { iconBack: fairygui.GImage }, "button", string>;
      type comFrame = __UIComponent<fairygui.GComponent, { close: UILibFrame.Components.ButtonClose }, string, string>;
      type comFrameTwo = __UIComponent<
        fairygui.GComponent,
        { close: UILibFrame.Components.ButtonTipsClose },
        string,
        string
      >;
      type WindowRelationList = __UIComponent<
        fairygui.GComponent,
        { listBtn: fairygui.GList; tails: fairygui.GImage },
        string,
        string
      >;
      type ButtonTipsClose = __UIComponent<fairygui.GButton, {}, "button", string>;
      type comTipsBg = __UIComponent<
        fairygui.GComponent,
        { tipsBg: fairygui.GImage; close: UILibFrame.Components.ButtonTipsClose },
        string,
        string
      >;
      type ButtonHelp = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ButtonCloseBiz = __UIComponent<fairygui.GButton, {}, "button", string>;
      type ViewRelationList = __UIComponent<fairygui.GComponent, { listBtn: fairygui.GList }, string, string>;
      type WindowRelationList2 = __UIComponent<fairygui.GComponent, { listBtn: fairygui.GList }, string, string>;
      type WindowRelationChargeList = __UIComponent<fairygui.GComponent, { listBtn: fairygui.GList }, string, string>;
      type comFrameActivity = __UIComponent<
        fairygui.GComponent,
        { close: UILibFrame.Components.ButtonCloseBiz },
        string,
        string
      >;
      type ButtonSbArrow = __UIComponent<fairygui.GButton, {}, "button", string>;
      type comFrameBg = __UIComponent<
        fairygui.GComponent,
        { close: UILibFrame.Components.ButtonTipsClose },
        string,
        string
      >;
      type comFrameThree = __UIComponent<
        fairygui.GComponent,
        { close: UILibFrame.Components.ButtonClose },
        string,
        string
      >;
      type WindowRelationList1 = __UIComponent<fairygui.GComponent, { listBtn: fairygui.GList }, string, string>;
    }
  }
  namespace Vip {
    type VipWindow = __UIComponent<
      fairygui.GComponent,
      {
        loaderFL: fairygui.GLoader;
        loaderFR: fairygui.GLoader;
        iconLine: fairygui.GImage;
        loaderBackClose: fairygui.GLoader;
        loaderText: fairygui.GLoader;
        loaderFl1: fairygui.GLoader;
        loaderFl2: fairygui.GLoader;
        loaderBox: fairygui.GLoader;
        loaderFun1: fairygui.GLoader;
        loaderFun2: fairygui.GLoader;
        loaderMax: fairygui.GLoader;
        loaderAwardEnd: fairygui.GLoader;
        close: Vip.Components.ButtonClose;
        btnEnter: Vip.Components.Button_Award;
        btnGet: Vip.Components.Button_Award;
        btnBuy: Vip.Components.Button_Award;
        btnMain: UILib.Components.button.CheckBox2;
        progress: Vip.Components.ProgressBarVip;
        iconProgress: fairygui.GImage;
        groupProgress: fairygui.GGroup;
        listVip: fairygui.GList;
        listWelfare: fairygui.GList;
        listItem: fairygui.GList;
        txtLevelL: fairygui.GTextField;
        txtLevelR: fairygui.GTextField;
        txtMoney: fairygui.GTextField;
      },
      "conMax",
      string
    >;
    type VipUpLevelWindow = __UIComponent<
      fairygui.GComponent,
      {
        loaderFrameL: fairygui.GLoader;
        close: Vip.Components.ButtonClose;
        btnGet: Vip.Components.Button_Award;
        listWelfare: fairygui.GList;
        loaderVip1: fairygui.GLoader;
        loaderText1: fairygui.GLoader;
        txtLevel: fairygui.GTextField;
      },
      string,
      string
    >;
    namespace Components {
      type VipLevelRender = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type VipWelLvHRender = __UIComponent<
        fairygui.GComponent,
        { loaderPint: fairygui.GLoader; txtWelfare: fairygui.GTextField },
        string,
        string
      >;
      type VipTaskRender = __UIComponent<
        fairygui.GComponent,
        {
          txtConditon: fairygui.GTextField;
          txtCount: fairygui.GTextField;
          loaderComplete: fairygui.GLoader;
          btnEnter: Vip.Components.Button_Award;
        },
        string,
        string
      >;
      type Button_Award = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type VipWelLvRender = __UIComponent<
        fairygui.GComponent,
        { loaderPint: fairygui.GLoader; txtWelfare: fairygui.GTextField },
        string,
        string
      >;
      type ButtonClose = __UIComponent<fairygui.GButton, {}, "button", string>;
      type comProgress = __UIComponent<fairygui.GComponent, {}, string, string>;
      type ProgressBarVip = __UIComponent<
        fairygui.GProgressBar,
        { bar: Vip.Components.comProgress; title: fairygui.GTextField },
        string,
        string
      >;
      type VipRewardRender = __UIComponent<
        fairygui.GComponent,
        { iconBakc: fairygui.GImage; render: UILib.Components.render.RewardRender1 },
        string,
        string
      >;
    }
  }
  namespace WarBlade {
    type WarBladeWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        txtFight: fairygui.GTextField;
        attrList: fairygui.GList;
        skillIcon: fairygui.GLoader;
        txtSkillDesc: fairygui.GTextField;
        starList: fairygui.GList;
        itemList: fairygui.GList;
        btnUpgrade: UILib.Components.button.Button11;
        skillList: fairygui.GList;
        imgName: fairygui.GLoader;
        txtRank: fairygui.GTextField;
        mod: fairygui.GGraph;
        btnThlb: WarBlade.Components.ButtonThlb;
        tails: fairygui.GImage;
      },
      "conState",
      string
    >;
    namespace Components {
      type WarBladeSkillRender = __UIComponent<
        fairygui.GComponent,
        { skillIcon: fairygui.GLoader; txtName: fairygui.GTextField },
        string,
        string
      >;
      type WarBladeAttrRender = __UIComponent<
        fairygui.GComponent,
        { attrName: fairygui.GTextField; attrValue: fairygui.GTextField; nextAttr: fairygui.GTextField },
        "conState",
        string
      >;
      type WarBladeItemRender = __UIComponent<
        fairygui.GComponent,
        { item: UILib.Components.render.ItemCFGRender; costNum: fairygui.GTextField },
        string,
        string
      >;
      type ButtonThlb = __UIComponent<fairygui.GButton, { imgName: fairygui.GLoader }, string, string>;
    }
  }
  namespace Wardrobe {
    type WardrobeWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        relation: UILibFrame.Components.WindowRelationList;
      },
      string,
      string
    >;
    type WardrobeWeaponWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtFight: fairygui.GTextField;
        txtRunOut: fairygui.GTextField;
        listBg: fairygui.GList;
        textAttrName: fairygui.GTextField;
        textAttrValue: fairygui.GTextField;
        textNextAttrValue: fairygui.GTextField;
        listStar: fairygui.GList;
        listStarL: fairygui.GList;
        item: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        btnLvUp: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
        lvUpGroup: fairygui.GGroup;
        txtTimes: fairygui.GTextField;
        roleInViewHuman: UILib.Components.roleInView.RoleInView;
        roleInView: UILib.Components.roleInView.RoleInView;
        btnDown: Wardrobe.Component.BtnDown;
        btnUp: Wardrobe.Component.BtnUp;
        listW: fairygui.GList;
        imgSuit: fairygui.GLoader;
        imgNoStar: fairygui.GImage;
        imgMax: fairygui.GImage;
      },
      "act",
      string
    >;
    type WardrobeClothWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtFight: fairygui.GTextField;
        txtRunOut: fairygui.GTextField;
        listBg: fairygui.GList;
        textAttrName: fairygui.GTextField;
        textAttrValue: fairygui.GTextField;
        textNextAttrValue: fairygui.GTextField;
        listStar: fairygui.GList;
        listStarL: fairygui.GList;
        item: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        btnLvUp: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
        lvUpGroup: fairygui.GGroup;
        txtTimes: fairygui.GTextField;
        roleInView: UILib.Components.roleInView.RoleInView;
        roleInViewWeapon: UILib.Components.roleInView.RoleInView;
        btnDown: Wardrobe.Component.BtnDown;
        btnUp: Wardrobe.Component.BtnUp;
        imgSuit: fairygui.GLoader;
        listC: fairygui.GList;
        imgMax: fairygui.GImage;
        imgNoStar: fairygui.GImage;
      },
      "act",
      string
    >;
    type WardrobeHonorWindow = __UIComponent<
      fairygui.GComponent,
      {
        pos1: fairygui.GTextField;
        pos2: fairygui.GTextField;
        listBg: fairygui.GList;
        textAttrName: fairygui.GTextField;
        textAttrValue: fairygui.GTextField;
        item: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        btnLvUp: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
        ActGroup: fairygui.GGroup;
        roleInView: UILib.Components.roleInView.RoleInView;
        listH: fairygui.GList;
        imgcurHonor1: UILib.Components.roleInView.RoleInView;
        imgcurHonor2: UILib.Components.roleInView.RoleInView;
        btnUse: UILib.Components.button.Button3_green;
        btnUnload: UILib.Components.button.Button3_green;
        txtTimes: fairygui.GTextField;
        imgcurHonor3: UILib.Components.roleInView.RoleInView;
        btnUse2: UILib.Components.button.Button3_green;
        btnUnload2: UILib.Components.button.Button3_green;
        pos2Group: fairygui.GGroup;
        imgSuit: fairygui.GLoader;
        imgPrivilige: fairygui.GImage;
      },
      string,
      string
    >;
    type WardrobeSuitWindow = __UIComponent<fairygui.GComponent, { list: fairygui.GList }, string, string>;
    type WardrobeTattooWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtFight: fairygui.GTextField;
        listBg: fairygui.GList;
        textAttrName: fairygui.GTextField;
        textAttrValue: fairygui.GTextField;
        txtTimes: fairygui.GTextField;
        roleInView: UILib.Components.roleInView.RoleInView;
        btnDown: Wardrobe.Component.BtnDown;
        btnUp: Wardrobe.Component.BtnUp;
        listC: fairygui.GList;
        txtRunOut: fairygui.GTextField;
        item: UILib.Components.render.ItemCFGRender;
        costCount: fairygui.GTextField;
        btnLvUp: UILib.Components.button.Button11;
        redPoint: fairygui.GImage;
        groups: fairygui.GGroup;
        skillIcon: fairygui.GLoader;
        imgAct: fairygui.GImage;
      },
      "act",
      string
    >;
    namespace Component {
      type AttrBgRender = __UIComponent<fairygui.GComponent, {}, string, string>;
      type BtnUp = __UIComponent<fairygui.GButton, { bg: fairygui.GLoader }, "button", string>;
      type WardrobeWSubRender = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; imgMax: fairygui.GImage; huan: fairygui.GLoader; imgRed: fairygui.GImage },
        "button",
        string
      >;
      type WardrobeWRender = __UIComponent<
        fairygui.GButton,
        {
          subTypeList: fairygui.GList;
          imgRed: fairygui.GImage;
          typeLod: fairygui.GLoader;
          clickItem: fairygui.GLoader;
        },
        "button",
        string
      >;
      type BtnDown = __UIComponent<fairygui.GButton, { bg: fairygui.GLoader }, "button", string>;
      type WardrobeSuitRender = __UIComponent<
        fairygui.GComponent,
        {
          txtName: fairygui.GTextField;
          txtDesc: fairygui.GTextField;
          txtActivate: fairygui.GTextField;
          textAttrName: fairygui.GTextField;
          textAttrValue: fairygui.GTextField;
          txtFashion: fairygui.GTextField;
        },
        string,
        string
      >;
      type WardrobeStarRender = __UIComponent<fairygui.GComponent, {}, "c1", string>;
    }
  }
  namespace WarmPrompt {
    type ButtonClose = __UIComponent<fairygui.GButton, {}, "button", string>;
    type Component1 = __UIComponent<fairygui.GComponent, { txt_info: fairygui.GTextField }, string, string>;
    type WarmPromptWindow = __UIComponent<
      fairygui.GComponent,
      { btnclose: WarmPrompt.ButtonClose; infoCom: WarmPrompt.Component1; btnGet: UILib.Components.button.Button11 },
      string,
      string
    >;
  }
  namespace WelfareSale {
    type WelfareSaleWindow = __UIComponent<fairygui.GComponent, { rewardList: fairygui.GList }, string, string>;
    type WelfareSaleRender = __UIComponent<
      fairygui.GComponent,
      {
        txtName: fairygui.GTextField;
        item: UILib.Components.render.ItemCFGRender;
        txtOldPrice: fairygui.GTextField;
        txtNowPrice: fairygui.GTextField;
        btnBuy: UILib.Components.button.Button15;
        txtLastCount: fairygui.GTextField;
        imgOldCost: fairygui.GLoader;
        imgNowCost: fairygui.GLoader;
        txtCount: fairygui.GTextField;
      },
      string,
      string
    >;
  }
  namespace Wing {
    type WingWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: UILibFrame.Components.comFrame;
        commonView: Wing.ExternCommonWindow;
        loaderTitle: fairygui.GLoader;
      },
      string,
      string
    >;
    type ExternCommonWindow = __UIComponent<
      fairygui.GComponent,
      {
        imgBg: fairygui.GLoader;
        roleInView: UILib.Components.roleInView.RoleInView;
        txtFight: fairygui.GTextField;
        needItem: UILib.Components.render.ItemCFGRender;
        btnUpgrade: UILib.Components.button.Button11;
        costNum: fairygui.GTextField;
        headList: fairygui.GList;
        skillList: fairygui.GList;
        attrList: fairygui.GList;
        txtRightLv: fairygui.GTextField;
        txtMaxLv: fairygui.GTextField;
        starList: fairygui.GList;
        btnUse2: Wing.Components.btnUse;
        btnUse1: Wing.Components.btnUse;
        btnSpecial1: Wing.Components.btnSpecialItem;
        btnSpecial2: Wing.Components.btnSpecialItem;
        imgName: fairygui.GLoader;
        txtLv: fairygui.GTextField;
        equipList: fairygui.GList;
        imgMax: fairygui.GLoader;
        btnAll: Wing.Components.btnUse;
        txtSkillName: fairygui.GTextField;
      },
      "conAct" | "conTurn",
      string
    >;
    type ExternSpecialItemWindow = __UIComponent<
      fairygui.GComponent,
      {
        render: UILib.Components.render.ItemCFGRender;
        txtName: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        txtNum: fairygui.GTextField;
        attrList: fairygui.GList;
        btnUse: UILib.Components.button.Button2_Orange;
        descView: Wing.Components.ExternUseCom;
      },
      string,
      string
    >;
    type ExternAllShowWindow = __UIComponent<
      fairygui.GComponent,
      {
        txtFight: fairygui.GTextField;
        txtNum: fairygui.GTextField;
        attrList: fairygui.GList;
        nameList: fairygui.GList;
      },
      string,
      string
    >;
    namespace Components {
      type ExternCommonRender = __UIComponent<
        fairygui.GButton,
        {
          imgBg: fairygui.GLoader;
          imgHead: fairygui.GLoader;
          txtName: fairygui.GTextField;
          imgSelect: fairygui.GLoader;
          red: fairygui.GImage;
          imgUsed: fairygui.GLoader;
        },
        "button",
        string
      >;
      type ExternCommonSkillRender = __UIComponent<
        fairygui.GComponent,
        { skillIcon: fairygui.GLoader; txtName: fairygui.GTextField },
        string,
        string
      >;
      type ExternCommonAttrRender = __UIComponent<
        fairygui.GComponent,
        { attrName: fairygui.GTextField; attrValue: fairygui.GTextField },
        string,
        string
      >;
      type ExternCommonStarRender = __UIComponent<
        fairygui.GComponent,
        { star0: fairygui.GImage; star1: fairygui.GImage },
        "conChange",
        string
      >;
      type btnUse = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type btnSpecialItem = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; red: fairygui.GImage },
        "button",
        string
      >;
      type ButtonTitle = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
      type ExternCommonNameRender = __UIComponent<
        fairygui.GComponent,
        { txtName: fairygui.GTextField },
        string,
        string
      >;
      type ExternUseCom = __UIComponent<fairygui.GComponent, { txtUse: fairygui.GTextField }, string, string>;
    }
  }
  namespace ZTArtifactGift {
    type ZTArtifactGiftRender = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        btnBuy: UILib.Components.button.Button11;
        flag: fairygui.GLoader;
        txtLimit: fairygui.GTextField;
      },
      string,
      string
    >;
    type ZTArtifactGiftWindow = __UIComponent<
      fairygui.GComponent,
      { txtTimes: fairygui.GTextField; txtDesc: fairygui.GTextField; list: fairygui.GList },
      string,
      string
    >;
  }
  namespace ZTLoginGifts {
    type ZTLoginGiftExtraWindow = __UIComponent<
      fairygui.GComponent,
      { song: fairygui.GLoader; roleInView: UILib.Components.roleInView.RoleInView },
      string,
      string
    >;
    type ZTLoginGiftRender = __UIComponent<
      fairygui.GComponent,
      {
        bg: fairygui.GLoader;
        day: fairygui.GLoader;
        txtDay: fairygui.GTextField;
        item: UILib.Components.render.RewardRender2;
        btnGet: UILib.Components.button.Button15;
        imgGet: fairygui.GLoader;
        flag: fairygui.GLoader;
        red: fairygui.GImage;
      },
      string,
      string
    >;
    type ZTLoginGiftWindow = __UIComponent<
      fairygui.GComponent,
      { txtTimes: fairygui.GTextField; txtDesc: fairygui.GTextField; list: fairygui.GList },
      string,
      string
    >;
  }
  namespace ZTMoonLoginGifts {
    type ZTMoonLoginGiftsExtraWindow = __UIComponent<
      fairygui.GComponent,
      { song: fairygui.GLoader; roleInView: UILib.Components.roleInView.RoleInView },
      string,
      string
    >;
    type ZTMoonLoginGiftsRender = __UIComponent<
      fairygui.GComponent,
      {
        bg: fairygui.GLoader;
        day: fairygui.GLoader;
        txtDay: fairygui.GTextField;
        item: UILib.Components.render.RewardRender2;
        btnGet: UILib.Components.button.Button15;
        imgGet: fairygui.GLoader;
        flag: fairygui.GLoader;
        red: fairygui.GImage;
      },
      string,
      string
    >;
    type ZTMoonLoginGiftsWindow = __UIComponent<
      fairygui.GComponent,
      { txtTimes: fairygui.GTextField; txtDesc: fairygui.GTextField; list: fairygui.GList },
      string,
      string
    >;
  }
  namespace ZTMoonPrivillage {
    type ZTMoonPrivillageWindow = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        txtTimes: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        btnBuy: ZTMoonPrivillage.button98;
        imgBuy: fairygui.GLoader;
      },
      string,
      string
    >;
    type button98 = __UIComponent<fairygui.GButton, {}, string, string>;
  }
  namespace ZTTokenAward {
    type ZTTokenAwardWindow = __UIComponent<
      fairygui.GComponent,
      { txtTime: fairygui.GTextField; txtDesc: fairygui.GTextField; rewardList: fairygui.GList },
      string,
      string
    >;
    type ZTTokenAwardRender = __UIComponent<
      fairygui.GComponent,
      {
        txtDesc: fairygui.GTextField;
        itemFree: UILib.Components.render.RewardRender2;
        item: UILib.Components.render.RewardRender2;
        btnGetFree: UILib.Components.button.Button14;
        btnGet: UILib.Components.button.Button14;
        freeRed: fairygui.GImage;
        vipRed: fairygui.GImage;
      },
      "conFree" | "conState",
      string
    >;
  }
  namespace ZTTokenMall {
    type ZTTokenMallWindow = __UIComponent<
      fairygui.GComponent,
      { txtTime: fairygui.GTextField; txtDesc: fairygui.GTextField; rewardList: fairygui.GList },
      string,
      string
    >;
    type ZTTokenMallRender = __UIComponent<
      fairygui.GComponent,
      {
        imgMark: fairygui.GLoader;
        txtItem: fairygui.GTextField;
        item: UILib.Components.render.RewardRender2;
        txtNeed: fairygui.GTextField;
        imgNeed: fairygui.GLoader;
        btnExchange: UILib.Components.button.Button14;
        txtExchange: fairygui.GTextField;
      },
      "conState",
      string
    >;
  }
  namespace ZTTreasure {
    type ZTTreasureWindow = __UIComponent<
      fairygui.GComponent,
      {
        item0: UILib.Components.render.RewardRender2;
        item1: UILib.Components.render.RewardRender2;
        item2: UILib.Components.render.RewardRender2;
        item3: UILib.Components.render.RewardRender2;
        item5: UILib.Components.render.RewardRender2;
        item6: UILib.Components.render.RewardRender2;
        item4: UILib.Components.render.RewardRender2;
        rewardBox: fairygui.GGroup;
        btnSeek1: UILib.Components.button.Button11;
        btnSeek10: UILib.Components.button.Button11;
        txtLastTime: fairygui.GTextField;
        box0: ZTTreasure.Components.ZTTreasureRender;
        box4: ZTTreasure.Components.ZTTreasureRender;
        box3: ZTTreasure.Components.ZTTreasureRender;
        box2: ZTTreasure.Components.ZTTreasureRender;
        box1: ZTTreasure.Components.ZTTreasureRender;
        bar: ZTTreasure.Components.progressBar;
      },
      string,
      string
    >;
    type ZTTreasureExtraWindow = __UIComponent<
      fairygui.GComponent,
      { song: fairygui.GLoader; roleInView: UILib.Components.roleInView.RoleInView },
      string,
      string
    >;
    namespace Components {
      type progressBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type ZTTreasureRender = __UIComponent<
        fairygui.GComponent,
        { txtCount: fairygui.GTextField; box: ZTTreasure.Components.BoxBtn },
        "conState",
        string
      >;
      type BoxBtn = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
    }
  }
  namespace ZTTreasureCheer {
    type ZTTreasureCheerWindow = __UIComponent<
      fairygui.GComponent,
      { txtTimes: fairygui.GTextField; txtDesc: fairygui.GTextField; list: fairygui.GList },
      string,
      string
    >;
    type ZTTreasureCheerRender = __UIComponent<
      fairygui.GComponent,
      {
        list: fairygui.GList;
        btnBuy: UILib.Components.button.Button11;
        flag: fairygui.GLoader;
        txtLimit: fairygui.GTextField;
      },
      string,
      string
    >;
  }
}
