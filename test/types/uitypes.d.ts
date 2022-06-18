declare namespace uit {
  type __UIComponent<
    Base,
    Children,
    Controllers extends string = string,
    Transitions extends string = string
  > = Base & {
    getChild<Key extends keyof Children>(
      name: Key,
      explicitType: true
    ): Children[Key];
    getController(name: Controllers): fairygui.Controller;
    getTransition(transName: Transitions): fairygui.Transition;
  };
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
        btnRecharge: fairygui.GButton;
        btnMall: UILib.Components.button.Button3_yellow;
        btnTidy: UILib.Components.button.Button3_green;
        btnAllUse: UILib.Components.button.Button3_blue;
      },
      "conType",
      string
    >;
    type BagWindow = __UIComponent<
      fairygui.GComponent,
      { loaderTitle: fairygui.GLoader },
      string,
      string
    >;
    type BagStorageWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnOepn: fairygui.GButton;
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
        {
          bagRender: UILib.Components.render.BagRender;
          loaderCon: fairygui.GLoader;
        },
        string,
        string
      >;
      type ItemRecycleRender = __UIComponent<
        fairygui.GComponent,
        { btnOepn: fairygui.GButton; imgType: fairygui.GLoader },
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
        {
          joystick_circle: MainUI.Components.Joystick.Joystick_Circle;
          touch: fairygui.GComponent;
        },
        string,
        string
      >;
      type BottomRight = __UIComponent<
        fairygui.GComponent,
        {
          btnSpecial: MainUI.Components.BottomRight.ShortCutRender;
          shortCutCom: MainUI.Components.BottomRight.shortCutCom;
          btnPlayer: fairygui.GButton;
          btnMonster: fairygui.GButton;
          btnAttack: MainUI.Components.BottomRight.BtnAttack;
          btnNear: fairygui.GButton;
          btnChange: fairygui.GButton;
          nearView: MainUI.Components.BottomRight.Near.NearView;
          faPop: MainUI.Components.BottomRight.faPop;
          shortCutGestrue: MainUI.Components.BottomRight.ShortCutGestrue;
          imgSpecial: fairygui.GImage;
          skillAll: fairygui.GGroup;
          itemShortCut2: MainUI.Components.BottomRight.ShortCutItemRender;
          itemShortCut1: MainUI.Components.BottomRight.ShortCutItemRender;
          btnAutoF: MainUI.Components.BottomRight.btnOnHook;
          btnDeploy: fairygui.GButton;
          itemShortCut3: MainUI.Components.BottomRight.ShortCutItemRender;
          imgActBg: fairygui.GLoader;
          txtActTime: fairygui.GTextField;
          txtActName: fairygui.GTextField;
          imgActIcon: fairygui.GLoader;
          btnActivity: fairygui.GButton;
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
          testBtnRide: fairygui.GButton;
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
          btnTask: fairygui.GButton;
          btnTeam: fairygui.GButton;
          group_normal: fairygui.GGroup;
          btnOpen: fairygui.GButton;
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
          btnRankDiamond: fairygui.GButton;
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
          btnUpgrade: fairygui.GButton;
          upgradeView: MainUI.Components.BottomRight.UpgradeView;
          btnBag: MainUI.Components.MiddleRight.Button_Bag;
          popBag: fairygui.GComponent;
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
      type BtnJoy = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader },
        "button",
        string
      >;
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
      type mask = __UIComponent<
        fairygui.GComponent,
        { bar: fairygui.GImage },
        string,
        string
      >;
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
      type btnOnHook = __UIComponent<
        fairygui.GButton,
        { mod: fairygui.GGraph },
        "button",
        string
      >;
      type faPop = __UIComponent<
        fairygui.GComponent,
        { icon: fairygui.GLoader; title: fairygui.GTextField },
        string,
        string
      >;
      type UpgradeView = __UIComponent<
        fairygui.GComponent,
        { bg: fairygui.GImage; upgradeList: fairygui.GList },
        "bgCtrl",
        string
      >;
      type ShortCutGestrue = __UIComponent<
        fairygui.GComponent,
        { arrow: fairygui.GImage; button: fairygui.GImage },
        string,
        string
      >;
    }
    namespace Components.MiddleRight {
      type Button_Bag = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage; full: fairygui.GImage },
        "button",
        string
      >;
      type btnMid = __UIComponent<
        fairygui.GButton,
        { redPoint: fairygui.GImage },
        "button",
        string
      >;
      type BtnRide = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GImage },
        "button",
        string
      >;
      type TreasureMapNotice = __UIComponent<
        fairygui.GComponent,
        {
          txtItem: fairygui.GTextField;
          mapName: fairygui.GTextField;
          btnGoTo: MainUI.Components.MiddleRight.btnTreasureMap;
          bar: MainUI.Components.MiddleRight.progressBar_yellow;
          btnClose: fairygui.GButton;
        },
        "conState" | "conBar",
        string
      >;
      type btnTreasureMap = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader },
        "button",
        string
      >;
      type progressBar_yellow = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent; barTitle: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace Components.BottomMiddle {
      type ChatTextHead = __UIComponent<
        fairygui.GComponent,
        { textchat: fairygui.GRichTextField },
        string,
        string
      >;
      type expBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage },
        string,
        string
      >;
      type ChatText = __UIComponent<
        fairygui.GComponent,
        { channelIcon: fairygui.GLoader; textchat: fairygui.GRichTextField },
        string,
        string
      >;
      type ChatFaceHead = __UIComponent<
        fairygui.GComponent,
        { graph: fairygui.GGraph },
        string,
        string
      >;
      type MiddleBtnRender = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; title: fairygui.GTextField },
        "button",
        string
      >;
      type BtnEquip = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage },
        "button",
        string
      >;
      type btnMail = __UIComponent<
        fairygui.GButton,
        { mailMod: fairygui.GGraph },
        "button",
        string
      >;
      type ProgressHp = __UIComponent<
        fairygui.GProgressBar,
        { bar_v: fairygui.GComponent },
        string,
        string
      >;
      type ProgressMp = __UIComponent<
        fairygui.GProgressBar,
        { bar_v: fairygui.GComponent },
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
      type comModFogHp = __UIComponent<
        fairygui.GComponent,
        { modHp: fairygui.GGraph },
        string,
        string
      >;
      type comModFogMp = __UIComponent<
        fairygui.GComponent,
        { modMp: fairygui.GGraph },
        string,
        string
      >;
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
      type btnMsg = __UIComponent<
        fairygui.GButton,
        { redPoint: fairygui.GImage },
        "button",
        string
      >;
      type btnMillionMoney = __UIComponent<
        fairygui.GButton,
        { txtTime: fairygui.GTextField; redPoint: fairygui.GImage },
        "button",
        string
      >;
    }
    namespace Components.MiddleLeft {
      type TeamCom = __UIComponent<
        fairygui.GComponent,
        {
          list: fairygui.GList;
          btnCreate: fairygui.GButton;
          btnSearch: fairygui.GButton;
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
      type TeamInfoOpWindow = __UIComponent<
        fairygui.GComponent,
        { funcList: fairygui.GList },
        string,
        string
      >;
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
      type Rdo1 = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage },
        "button",
        "t0"
      >;
      type subFuncCom = __UIComponent<
        fairygui.GComponent,
        { subFuncList: fairygui.GList },
        string,
        string
      >;
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
      type ButtonLegendaryRoad = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; imgRed: fairygui.GImage },
        "button",
        string
      >;
      type ButtonCrossServer = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          imgDay: fairygui.GImage;
          txtDay: fairygui.GTextField;
        },
        "button" | "conState",
        string
      >;
    }
    namespace Components.TopLeft {
      type BtnVip = __UIComponent<
        fairygui.GButton,
        { iconRed: fairygui.GImage },
        "button" | "vipCtr",
        string
      >;
      type BtnMode = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader },
        "button",
        string
      >;
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
      type BuffView = __UIComponent<
        fairygui.GComponent,
        { buffList: fairygui.GList },
        string,
        "t0" | "t1"
      >;
      type BtnRoleHead = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader; red: fairygui.GImage },
        "button",
        string
      >;
      type BtnPrivilege = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
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
        {
          icon: fairygui.GLoader;
          nameIcon: fairygui.GLoader;
          redPoint: fairygui.GImage;
          title: fairygui.GTextField;
        },
        "button",
        string
      >;
      type progressBar_hp = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent },
        string,
        string
      >;
      type progressBar_mp = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent },
        string,
        string
      >;
      type progressBar_xp = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent },
        string,
        string
      >;
      type BtnFight = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
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
      type ButtonWayDiamond = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage },
        "button",
        string
      >;
      type ButtonSurprise = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          imgRed: fairygui.GImage;
          txtTime: fairygui.GTextField;
        },
        "button",
        string
      >;
      type ButtonDrillingArtifact = __UIComponent<
        fairygui.GButton,
        { imgRed: fairygui.GImage },
        "button",
        string
      >;
      type ButtonQmdj = __UIComponent<
        fairygui.GButton,
        {
          icon: fairygui.GLoader;
          imgRed: fairygui.GImage;
          txtTime: fairygui.GTextField;
        },
        "button",
        string
      >;
    }
    namespace Components.BottomMiddle.NoticeButton {
      type NoticeButtonView = __UIComponent<
        fairygui.GComponent,
        { listButtons: fairygui.GList },
        string,
        string
      >;
      type NoticeButtonItem = __UIComponent<
        fairygui.GButton,
        { imgBg: fairygui.GLoader },
        "button",
        "t0"
      >;
    }
    namespace Components.TopMiddle {
      type RoleHeadInfo = __UIComponent<
        fairygui.GComponent,
        {
          bg: fairygui.GImage;
          close: fairygui.GButton;
          comMid: MainUI.Components.TopMiddle.ComHp;
          comUp: MainUI.Components.TopMiddle.ComHp;
          roleHead: fairygui.GLoader;
          textName: fairygui.GTextField;
          textHp: fairygui.GTextField;
        },
        string,
        string
      >;
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
          btnEye: fairygui.GButton;
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
      type ComHp = __UIComponent<
        fairygui.GComponent,
        { loaderIcon: fairygui.GLoader },
        string,
        string
      >;
      type showDropView = __UIComponent<
        fairygui.GComponent,
        { showDropList: fairygui.GList },
        string,
        string
      >;
      type progressBar_monster = __UIComponent<
        fairygui.GProgressBar,
        { bg: fairygui.GImage; bar: MainUI.Components.TopMiddle.ComHp },
        string,
        string
      >;
      type BossBuffRender = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader },
        "button",
        string
      >;
      type ComUpgrade = __UIComponent<
        fairygui.GComponent,
        { upgradeLv: fairygui.GTextField; upgradeHolder: fairygui.GGraph },
        string,
        string
      >;
      type BarShiled = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage },
        string,
        string
      >;
      type NameCom = __UIComponent<
        fairygui.GComponent,
        { textName: fairygui.GTextField },
        string,
        string
      >;
      type comNameBossH = __UIComponent<
        fairygui.GComponent,
        { textNameL: fairygui.GTextField },
        string,
        string
      >;
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
      type BossDropCom = __UIComponent<
        fairygui.GComponent,
        { dropList: fairygui.GList },
        string,
        string
      >;
    }
    namespace Components.BottomRight.Near {
      type NearView = __UIComponent<
        fairygui.GComponent,
        {
          btnAttack: fairygui.GButton;
          btnPlayer: UILib.Components.tab.tab_1;
          btnBoss: UILib.Components.tab.tab_1;
          playerList: fairygui.GList;
          bossList: fairygui.GList;
        },
        "typeCtrl",
        string
      >;
      type NearBossRender = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type NearBloodBarMon = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage },
        string,
        string
      >;
      type NearPlayerRender = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; txtLv: fairygui.GTextField },
        "selectCtrl",
        string
      >;
      type tab = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
    }
    namespace Components.Pop {
      type PopBottomMiddle = __UIComponent<
        fairygui.GComponent,
        { btnClose: fairygui.GButton; tip: fairygui.GRichTextField },
        string,
        string
      >;
      type PopMiddleRight = __UIComponent<
        fairygui.GComponent,
        { btnClose: fairygui.GButton; tip: fairygui.GTextField },
        "button",
        string
      >;
      type PopMiddleRight1 = __UIComponent<
        fairygui.GComponent,
        { btnClose: fairygui.GButton; tip: fairygui.GTextField },
        "button",
        string
      >;
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
      type BossBtn = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage },
        "button",
        string
      >;
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
      type ButtonVipShare = __UIComponent<
        fairygui.GButton,
        {
          progress: MainUI.Components.TopLeft.vip.comProgress;
          iconAlpha: fairygui.GImage;
          iconRed: fairygui.GImage;
        },
        "button",
        string
      >;
      type comProgress = __UIComponent<
        fairygui.GComponent,
        { iconProgress: fairygui.GImage },
        string,
        string
      >;
      type VipBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent; title: fairygui.GTextField },
        string,
        string
      >;
      type ProgressShare = __UIComponent<
        fairygui.GProgressBar,
        {
          iconBack: fairygui.GImage;
          bar_v: MainUI.Components.TopLeft.vip.comProgress;
          iconLingth: fairygui.GImage;
        },
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
          btnClose: fairygui.GButton;
          btnHint: fairygui.GButton;
          btnEnter: MainUI.Components.ActList.ButtonEnter;
          txtName: fairygui.GTextField;
          txtHint: fairygui.GTextField;
          txtAward: fairygui.GTextField;
        },
        string,
        string
      >;
      type ButtonEnter = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type ActClientView = __UIComponent<
        fairygui.GComponent,
        {
          iconFrame: fairygui.GImage;
          iconFrame1: fairygui.GImage;
          iconFrame2: fairygui.GImage;
          btnClose: fairygui.GButton;
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
      type NpcQuickView = __UIComponent<
        fairygui.GComponent,
        { npcList: fairygui.GList },
        string,
        string
      >;
    }
    namespace Components.BottomMiddle.JobSwitch {
      type JobSwitch = __UIComponent<
        fairygui.GComponent,
        { redPoint: fairygui.GImage },
        "job",
        string
      >;
    }
  }
  namespace UILib {
    namespace Components.render {
      type BagRender = __UIComponent<
        fairygui.GButton,
        {
          back: fairygui.GLoader;
          quality: fairygui.GLoader;
          imgIcon: fairygui.GLoader;
          imgLock: fairygui.GLoader;
        },
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
        {
          back: fairygui.GLoader;
          quality: fairygui.GLoader;
          imgIcon: fairygui.GLoader;
        },
        string,
        string
      >;
      type FaceRender = __UIComponent<
        fairygui.GButton,
        { icon: fairygui.GLoader },
        "button",
        string
      >;
      type ItemCFGRender = __UIComponent<
        fairygui.GButton,
        {
          back: fairygui.GLoader;
          quality: fairygui.GLoader;
          imgIcon: fairygui.GLoader;
        },
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
      type StartRender = __UIComponent<
        fairygui.GComponent,
        { loaderStart: fairygui.GLoader },
        "conIsLight",
        string
      >;
      type RewardImgRender = __UIComponent<
        fairygui.GComponent,
        {
          itemRender: UILib.Components.render.RewardRender;
          nopay: fairygui.GLoader;
        },
        "iconState",
        string
      >;
      type RewardRender1 = __UIComponent<
        fairygui.GButton,
        {
          back: fairygui.GLoader;
          quality: fairygui.GLoader;
          imgIcon: fairygui.GLoader;
        },
        string,
        string
      >;
      type SkillRender = __UIComponent<
        fairygui.GComponent,
        {
          bg: fairygui.GLoader;
          imgIcon: fairygui.GLoader;
          txtType: fairygui.GTextField;
        },
        string,
        string
      >;
      type SkillPRender = __UIComponent<
        fairygui.GComponent,
        {
          bg: fairygui.GLoader;
          imgIcon: fairygui.GLoader;
          txtType: fairygui.GTextField;
        },
        string,
        string
      >;
      type StarRender = __UIComponent<
        fairygui.GComponent,
        { loaderStart: fairygui.GLoader },
        "conIsLight",
        string
      >;
      type RewardRender2 = __UIComponent<
        fairygui.GButton,
        {
          back: fairygui.GLoader;
          quality: fairygui.GLoader;
          imgIcon: fairygui.GLoader;
        },
        string,
        string
      >;
      type HolyBeastRender = __UIComponent<
        fairygui.GButton,
        {
          quality: fairygui.GLoader;
          icon: fairygui.GLoader;
          itemIcon: fairygui.GLoader;
          equipMod: fairygui.GGraph;
        },
        string,
        string
      >;
      type RewardRenderSmall = __UIComponent<
        fairygui.GButton,
        {
          back: fairygui.GLoader;
          quality: fairygui.GLoader;
          imgIcon: fairygui.GLoader;
        },
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
        {
          iconBg: fairygui.GImage;
          icon: fairygui.GLoader;
          title: fairygui.GTextField;
        },
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
        {
          title: fairygui.GTextField;
          titleDown: fairygui.GTextField;
          redPoint: fairygui.GImage;
        },
        "button",
        string
      >;
      type tab_4 = __UIComponent<
        fairygui.GButton,
        {
          title: fairygui.GTextField;
          redPoint: fairygui.GImage;
          icon: fairygui.GLoader;
        },
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
        {
          title: fairygui.GTextField;
          titleDown: fairygui.GTextField;
          redPoint: fairygui.GImage;
        },
        "button",
        string
      >;
      type tab_10 = __UIComponent<
        fairygui.GButton,
        {
          titleDown: fairygui.GTextField;
          title: fairygui.GTextField;
          redPoint: fairygui.GImage;
        },
        "button",
        string
      >;
      type tab_11 = __UIComponent<
        fairygui.GButton,
        {
          titleDown: fairygui.GTextField;
          title: fairygui.GTextField;
          redPoint: fairygui.GImage;
        },
        "button",
        string
      >;
      type tab_12 = __UIComponent<
        fairygui.GButton,
        {
          titleDown: fairygui.GTextField;
          title: fairygui.GTextField;
          redPoint: fairygui.GImage;
        },
        "button",
        string
      >;
    }
    namespace Components.progressBar {
      type progressBar_yellow = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent; title: fairygui.GTextField },
        string,
        string
      >;
      type progressBar_green = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent; title: fairygui.GTextField },
        string,
        string
      >;
      type progressBar_white = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent },
        string,
        string
      >;
      type ProgressBar3 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type ProgressBar4 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage },
        string,
        string
      >;
    }
    namespace Components.back {
      type comTitle = __UIComponent<
        fairygui.GButton,
        {
          iconFL: fairygui.GImage;
          iconFR: fairygui.GImage;
          icon: fairygui.GLoader;
        },
        string,
        string
      >;
      type comTaskTitle = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type comYellowTitle = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
    }
    namespace Components.button {
      type ButtonPage1 = __UIComponent<
        fairygui.GButton,
        { icon1: fairygui.GImage; icon0: fairygui.GImage },
        "button",
        string
      >;
      type ButtonText = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GRichTextField },
        "button",
        string
      >;
      type Button6 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; red: fairygui.GImage },
        "button",
        string
      >;
      type CheckBox2 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type Button8 = __UIComponent<
        fairygui.GButton,
        {
          iconButton: fairygui.GImage;
          title: fairygui.GTextField;
          red: fairygui.GImage;
        },
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
      type Button2_Red = __UIComponent<
        fairygui.GButton,
        { red: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type Button8_small = __UIComponent<
        fairygui.GButton,
        {
          iconButton: fairygui.GImage;
          title: fairygui.GTextField;
          comBtnEffect: fairygui.GGraph;
        },
        "button",
        string
      >;
      type Button9_small = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField; comBtnEffect: fairygui.GGraph },
        "button",
        string
      >;
      type CheckBox3 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type ButtonClose = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type Button10 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type Button11 = __UIComponent<
        fairygui.GButton,
        { iconButton: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type Button12 = __UIComponent<
        fairygui.GButton,
        {
          iconButton: fairygui.GImage;
          title: fairygui.GTextField;
          comBtnEffect: fairygui.GGraph;
        },
        "button",
        string
      >;
      type Button13 = __UIComponent<
        fairygui.GButton,
        {
          iconButton: fairygui.GImage;
          title: fairygui.GTextField;
          comBtnEffect: fairygui.GGraph;
        },
        "button",
        string
      >;
      type Button111 = __UIComponent<
        fairygui.GButton,
        { iconButton: fairygui.GImage; title: fairygui.GTextField },
        "button",
        string
      >;
      type Button14 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type Button15 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type ButtonLabel = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type Button17 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type Button14_1 = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type Button14_s = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
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
    namespace Components.combobox {
      type ComboBox1_item = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type ComboBox1_popup = __UIComponent<
        fairygui.GComponent,
        { list: fairygui.GList },
        string,
        string
      >;
      type ComboBox1 = __UIComponent<
        fairygui.GComboBox,
        { title: fairygui.GRichTextField },
        "button",
        string
      >;
      type TypeSelecte = __UIComponent<
        fairygui.GComboBox,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type TypeSelecte_item = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type TypeSelecte_popup = __UIComponent<
        fairygui.GComponent,
        { list: fairygui.GList },
        string,
        string
      >;
      type ComboBox2 = __UIComponent<
        fairygui.GComboBox,
        { title: fairygui.GRichTextField },
        "button",
        string
      >;
      type ComboBox2_item = __UIComponent<
        fairygui.GButton,
        { title: fairygui.GTextField },
        "button",
        string
      >;
      type ComboBox2_popup = __UIComponent<
        fairygui.GComponent,
        { list: fairygui.GList },
        string,
        string
      >;
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
      type RoleInView = __UIComponent<
        fairygui.GComponent,
        { roleGraph: fairygui.GGraph },
        string,
        string
      >;
    }
    namespace Components.DisLimit {
      type DisLimitView = __UIComponent<
        fairygui.GComponent,
        {
          btnWindow: UILib.Components.DisLimit.ButtonDisLimit;
          txtTime: fairygui.GTextField;
        },
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
      type Slider1 = __UIComponent<
        fairygui.GSlider,
        { bar: UILib.Components.slider.comSlider1; grip: fairygui.GButton },
        string,
        string
      >;
      type comSlider1 = __UIComponent<
        fairygui.GComponent,
        { iconBack: fairygui.GImage },
        string,
        string
      >;
      type comSilder2 = __UIComponent<
        fairygui.GComponent,
        { iconBack: fairygui.GImage },
        string,
        string
      >;
      type Slider2 = __UIComponent<
        fairygui.GSlider,
        { bar: UILib.Components.slider.comSilder2; grip: fairygui.GButton },
        string,
        string
      >;
    }
    namespace Components.progressbar {
      type ProgressBar3 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage; title: fairygui.GTextField },
        string,
        string
      >;
      type ProgressBar4 = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GImage },
        string,
        string
      >;
      type progressBar_green = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent; title: fairygui.GTextField },
        string,
        string
      >;
      type progressBar_white = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent },
        string,
        string
      >;
      type progressBar_yellow = __UIComponent<
        fairygui.GProgressBar,
        { bar: fairygui.GComponent; title: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace Components.tips {
      type PassiveSkillTipWindow = __UIComponent<
        fairygui.GComponent,
        {
          thump_skill: fairygui.GImage;
          itemRender: UILib.Components.render.SkillPRender;
          txtName: fairygui.GRichTextField;
          txtLevel: fairygui.GTextField;
          txtDesc: fairygui.GRichTextField;
          txtCost: fairygui.GTextField;
          txtCd: fairygui.GTextField;
          txtTile: fairygui.GTextField;
          smGroup: fairygui.GGroup;
        },
        string,
        string
      >;
      type SkillTip = __UIComponent<
        fairygui.GComponent,
        {
          skillBg: fairygui.GImage;
          thump_skill: fairygui.GImage;
          lineUp: fairygui.GImage;
          lineDown: fairygui.GImage;
          lineDown1: fairygui.GImage;
          itemRender: UILib.Components.render.SkillRender;
          txtName: fairygui.GRichTextField;
          txtType: fairygui.GTextField;
          txtLevel: fairygui.GTextField;
          txtCD: fairygui.GTextField;
          txtTile: fairygui.GTextField;
          txtDesc: fairygui.GRichTextField;
          txtNextLevel: fairygui.GTextField;
          txtProficiency: fairygui.GTextField;
          txtTile1: fairygui.GTextField;
          txtTile2: fairygui.GTextField;
          skillHurt: fairygui.GRichTextField;
          skillSpecial: fairygui.GRichTextField;
        },
        "typeCtrl" | "stateCtrl" | "isThump",
        string
      >;
      type SkillCFGTip = __UIComponent<
        fairygui.GComponent,
        {
          skillBg: fairygui.GImage;
          itemRender: UILib.Components.render.SkillRender;
          txtName: fairygui.GRichTextField;
          txtLevel: fairygui.GTextField;
          txtDesc: fairygui.GRichTextField;
          txtCost: fairygui.GTextField;
          txtCd: fairygui.GTextField;
          txtTalent: fairygui.GRichTextField;
          tfGroup: fairygui.GGroup;
          txtTile: fairygui.GTextField;
          smGroup: fairygui.GGroup;
          imgLine: fairygui.GImage;
        },
        string,
        string
      >;
      type SkillTalentTipWindow = __UIComponent<
        fairygui.GComponent,
        {
          thump_skill: fairygui.GImage;
          txtName: fairygui.GRichTextField;
          txtDesc: fairygui.GRichTextField;
          txtBelong: fairygui.GTextField;
          txtLv: fairygui.GTextField;
          txtTile: fairygui.GTextField;
          smGroup: fairygui.GGroup;
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
          tfGroup: fairygui.GGroup;
          txtTile: fairygui.GTextField;
          smGroup: fairygui.GGroup;
          imgLine: fairygui.GImage;
          itemRender: UILib.Components.render.SkillPRender;
          txtName: fairygui.GRichTextField;
          txtLevel: fairygui.GTextField;
          txtCost: fairygui.GTextField;
          txtCd: fairygui.GTextField;
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
        {
          equipL: UILib.Components.guardView.GuardRender;
          equipD: UILib.Components.guardView.GuardRender;
        },
        string,
        string
      >;
    }
  }
}
