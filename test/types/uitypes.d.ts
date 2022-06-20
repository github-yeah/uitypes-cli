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
  import _t55ptsa9 = Bag;
  namespace Bag {
    type BagRoleWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnNormal: _uionr2r4.Components.tab.tab_1;
        iconFullBag: fairygui.GImage;
        txtCount: fairygui.GTextField;
        btnMaterial: _uionr2r4.Components.tab.tab_1;
        btnEquip: _uionr2r4.Components.tab.tab_1;
        listBag: fairygui.GList;
        com101: _uionr2r4.Components.money.MoneyItem;
        btnRecharge: _uionr2r4.Components.button.ButtonAdd5;
        btnMall: _uionr2r4.Components.button.Button3_yellow;
        btnTidy: _uionr2r4.Components.button.Button3_green;
        btnAllUse: _uionr2r4.Components.button.Button3_blue;
      },
      "conType",
      string
    >;
    type BagWindow = __UIComponent<
      fairygui.GComponent,
      {
        contentArea: _uf42mume.Components.comFrame;
        loaderTitle: fairygui.GLoader;
        relation: _uf42mume.Components.WindowRelationList;
      },
      string,
      string
    >;
    type BagStorageWindow = __UIComponent<
      fairygui.GComponent,
      {
        btnOepn: _uionr2r4.Components.button.CheckBox1;
        listStorage: fairygui.GList;
        listPageStorage: fairygui.GList;
        txtNumStorage: fairygui.GTextField;
        txtDesc: fairygui.GTextField;
        comList: Component.ListView;
        txtCount: fairygui.GTextField;
        btnTidyStorage: _uionr2r4.Components.button.Button3_blue;
        btnTidyBag: _uionr2r4.Components.button.Button3_blue;
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
        btnBuy: _uionr2r4.Components.button.Button2_Orange;
        listMall: fairygui.GList;
        comList: Component.ListView;
        comMoney: _uionr2r4.Components.money.MoneyView;
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
        btnNormal: _uionr2r4.Components.tab.tab_1;
        iconFullBag: fairygui.GImage;
        txtCount: fairygui.GTextField;
        btnMaterial: _uionr2r4.Components.tab.tab_1;
        btnEquip: _uionr2r4.Components.tab.tab_1;
        comList: fairygui.GList;
      },
      "conType",
      string
    >;
    type ItemRecycleWindow = __UIComponent<
      fairygui.GComponent,
      {
        listView: Component.RecycleListView;
        recycleList: fairygui.GList;
        listReward: fairygui.GList;
        btnNormal: _uionr2r4.Components.tab.tab_1;
        btnSpecial: _uionr2r4.Components.tab.tab_1;
        txtTimeDesc: fairygui.GTextField;
        txtTime: fairygui.GTextField;
        txtAuto: fairygui.GTextField;
        btnAuto: fairygui.GLoader;
        btnUnAuto: fairygui.GLoader;
        bubble: fairygui.GLoader;
        txtRate: fairygui.GTextField;
        btnOk: _uionr2r4.Components.button.Button3_yellow;
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
          item: _uionr2r4.Components.render.RewardRender;
          txtName: fairygui.GTextField;
          txtPrice: fairygui.GTextField;
        },
        "button",
        string
      >;
      type StorageRender = __UIComponent<
        fairygui.GComponent,
        { bagRender: _uionr2r4.Components.render.BagRender; loaderCon: fairygui.GLoader },
        string,
        string
      >;
      type ItemRecycleRender = __UIComponent<
        fairygui.GComponent,
        { btnOepn: _uionr2r4.Components.button.CheckBox1; imgType: fairygui.GLoader },
        string,
        string
      >;
      type ItemRecycleItemRender = __UIComponent<
        fairygui.GComponent,
        { item: _uionr2r4.Components.render.BagRender; imgCheck: fairygui.GImage },
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
  import _tdl95hta = MainUI;
  namespace MainUI {
    type MainUIView = __UIComponent<
      fairygui.GComponent,
      {
        MainUIScreenEffectView: Components.ScreenEffect.screenEffect;
        MainUITopRightView: Views.TopRight;
        MainUIBottomRightView: Views.BottomRight;
        MainUIMiddleRightView: Views.MiddleRight;
        JoystickView: Views.Joystick;
        MainUITopLeftView: Views.TopLeft;
        MainUIBottomMiddleView: Views.BottomMiddle;
        MainUIMiddleLeftView: Views.MiddleLeft;
        MainUITopMiddleView: Views.TopMiddle;
        PopView: Views.PopView;
        NpcQuickView: Components.Npc.NpcQuickView;
      },
      string,
      string
    >;
    namespace Views {
      type Joystick = __UIComponent<
        fairygui.GComponent,
        { joystick_circle: Components.Joystick.Joystick_Circle; touch: Components.TopLeft.PlaceHolder },
        string,
        string
      >;
      type BottomRight = __UIComponent<
        fairygui.GComponent,
        {
          btnSpecial: Components.BottomRight.ShortCutRender;
          shortCutCom: Components.BottomRight.shortCutCom;
          btnPlayer: Components.BottomRight.BtnPlayer;
          btnMonster: Components.BottomRight.BtnMonster;
          btnAttack: Components.BottomRight.BtnAttack;
          btnNear: Components.MiddleRight.BtnTarget;
          btnChange: Components.BottomRight.BtnChange;
          nearView: Components.BottomRight.Near.NearView;
          faPop: Components.BottomRight.faPop;
          shortCutGestrue: Components.BottomRight.ShortCutGestrue;
          imgSpecial: fairygui.GImage;
          skillAll: fairygui.GGroup;
          itemShortCut2: Components.BottomRight.ShortCutItemRender;
          itemShortCut1: Components.BottomRight.ShortCutItemRender;
          btnAutoF: Components.BottomRight.btnOnHook;
          btnDeploy: Components.BottomRight.BtnOpen3;
          itemShortCut3: Components.BottomRight.ShortCutItemRender;
          imgActBg: fairygui.GLoader;
          txtActTime: fairygui.GTextField;
          txtActName: fairygui.GTextField;
          imgActIcon: fairygui.GLoader;
          btnActivity: Components.BottomRight.btnActivity;
        },
        "showCtrl" | "deploy3" | "conActivity",
        string
      >;
      type BottomMiddle = __UIComponent<
        fairygui.GComponent,
        {
          listChat: fairygui.GList;
          btnOpenChat: Components.TopMiddle.BtnEmpty;
          btnJobSwitch: Components.BottomMiddle.JobSwitch.JobSwitch;
          btnCharge: Components.BottomMiddle.ButtonReCharge;
          btnMillionMoney: Components.BottomMiddle.btnMillionMoney;
          TweenCom: fairygui.GGroup;
          barExp: Components.BottomMiddle.expBar;
          btnGm: _uionr2r4.Components.button.Button2_Orange;
          btnMail: Components.BottomMiddle.btnMail;
          progressHp: Components.BottomMiddle.ProgressHp;
          progressMp: Components.BottomMiddle.ProgressMp;
          testBtnRide: Components.BottomMiddle.btnRide;
          modFogHp: Components.BottomMiddle.comModFogHp;
          comHp: Components.BottomMiddle.comModHp;
          modFogMp: Components.BottomMiddle.comModFogMp;
          comMp: Components.BottomMiddle.comModMp;
          imgHpMp: fairygui.GLoader;
          txtHpMp: fairygui.GTextField;
          btnMsg: Components.BottomMiddle.btnMsg;
        },
        "showCtrl",
        string
      >;
      type MiddleLeft = __UIComponent<
        fairygui.GComponent,
        {
          taskCom: Components.MiddleLeft.TaskCom;
          teamCom: Components.MiddleLeft.TeamCom;
          container: _uf42mume.Components.Empty_Com;
          btnTask: Components.MiddleLeft.BtnTaskMain;
          btnTeam: Components.MiddleLeft.BtnTeam;
          group_normal: fairygui.GGroup;
          btnOpen: Components.MiddleLeft.BtnOpen;
        },
        "c1" | "aniC1",
        string
      >;
      type TopRight = __UIComponent<
        fairygui.GComponent,
        {
          bossBtn: Components.Boss.BossBtn;
          btnSmallMap: Components.emptyBtn;
          btnOpen: Components.TopRight.Rdo1;
          btnCom: Components.TopRight.TopRightBtns;
          loaderArea: fairygui.GLoader;
          textPos: fairygui.GTextField;
          limitBubble: fairygui.GLoader;
          lvUp50Bubble: fairygui.GLoader;
          lvUp100Bubble: fairygui.GLoader;
          mcBubble: fairygui.GLoader;
          legendaryEntry: Components.TopRight.ButtonLegendaryRoad;
          nc06Bubble: fairygui.GLoader;
          nc30Bubble: fairygui.GLoader;
          nc68Bubble: fairygui.GLoader;
          btnCrossServer: Components.TopRight.ButtonCrossServer;
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
          btnMode: Components.TopLeft.BtnMode;
          btnBuff: Components.TopLeft.BtnPrivilege;
          txtFight: fairygui.GTextField;
          btnFight: Components.emptyBtn;
          btnRoleHead: Components.TopLeft.BtnRoleHead;
          btnPreview: Components.TopLeft.BtnPreview;
          touchCloseLayer: Components.TopLeft.PlaceHolder;
          txt_lv: fairygui.GTextField;
          txt_screen: fairygui.GTextField;
          btnPrivilege: Components.TopLeft.vip.BtnOpenVip;
          txtAtk: fairygui.GImage;
          txt_diamond: fairygui.GTextField;
          txt_transmigration: fairygui.GTextField;
          btnRankDiamond: Components.TopLeft.ButtonRankDiamond;
          btnWayDiamond: Components.TopLeft.ButtonWayDiamond;
          btnDrillingArtifact: Components.TopLeft.ButtonDrillingArtifact;
          btnSurprise: Components.TopLeft.ButtonSurprise;
          btnQmdj: Components.TopLeft.ButtonQmdj;
          funGroup: fairygui.GGroup;
        },
        "jobCtrl",
        string
      >;
      type TopMiddle = __UIComponent<fairygui.GComponent, {}, string, string>;
      type MiddleRight = __UIComponent<
        fairygui.GComponent,
        {
          btnOpen: Components.MiddleRight.btnMid;
          btnList1: fairygui.GList;
          btnList2: fairygui.GList;
          btnList3: fairygui.GList;
          btnList4: fairygui.GList;
          btnList5: fairygui.GList;
          btnList6: fairygui.GList;
          btnUpgrade: Components.MiddleRight.Button2;
          upgradeView: Components.BottomRight.UpgradeView;
          btnBag: Components.MiddleRight.Button_Bag;
          popBag: Components.Pop.PopBagFullView;
          popMall: fairygui.GImage;
          treasureMapNotice: Components.MiddleRight.TreasureMapNotice;
        },
        "posCtrl",
        string
      >;
      type PopView = __UIComponent<
        fairygui.GComponent,
        {
          noticeButtonView: Components.BottomMiddle.NoticeButton.NoticeButtonView;
          autoMove: Components.BottomRight.TaskTransferView;
          upgradeCom: Components.TopMiddle.ComUpgrade;
          dailyBossRe: Components.Pop.dailyBoss.DailyBossRe;
          actView: Components.ActList.ActView;
          actClientView: Components.ActList.ActClientView;
        },
        string,
        string
      >;
    }
    namespace Components.Joystick {
      type Joystick_Circle = __UIComponent<
        fairygui.GComponent,
        { button: Components.Joystick.BtnJoy },
        "stateCtrl",
        string
      >;
      type Joystick_bg = __UIComponent<fairygui.GComponent, {}, string, string>;
      type BtnJoy = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
    }
    namespace Components.BottomRight {
      type shortCutCom = __UIComponent<
        fairygui.GComponent,
        { shortCutList: Components.BottomRight.ShortCutList },
        "pageCtrl",
        string
      >;
      type ShortCutList = __UIComponent<
        fairygui.GComponent,
        {
          shortCut_1: Components.BottomRight.ShortCutRender;
          shortCut_2: Components.BottomRight.ShortCutRender;
          shortCut_3: Components.BottomRight.ShortCutRender;
          shortCut_4: Components.BottomRight.ShortCutRender;
          shortCut_5: Components.BottomRight.ShortCutRender;
          shortCut_6: Components.BottomRight.ShortCutRender;
          shortCut_7: Components.BottomRight.ShortCutRender;
          shortCut_8: Components.BottomRight.ShortCutRender;
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
          cdMask: Components.BottomRight.mask;
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
          cdMask: Components.BottomRight.mask;
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
          cdMask: Components.BottomRight.mask;
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
          cdMask: Components.BottomRight.mask;
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
    namespace Components.BottomMiddle {
      type CircleNoticeItem = __UIComponent<fairygui.GComponent, {}, string, string>;
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
        { bar_v: Components.BottomMiddle.comProgressHp },
        string,
        string
      >;
      type ProgressMp = __UIComponent<
        fairygui.GProgressBar,
        { bar_v: Components.BottomMiddle.comProgressMp },
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
          lvPro: Components.BottomMiddle.ProgressBar1;
          btnUse: _uionr2r4.Components.button.Button15;
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
          btnGoTo: Components.MiddleRight.btnTreasureMap;
          bar: Components.MiddleRight.progressBar_yellow;
          btnClose: Components.MiddleRight.btnTreasureMapClose;
        },
        "conState" | "conBar",
        string
      >;
      type btnTreasureMap = __UIComponent<fairygui.GButton, { icon: fairygui.GLoader }, "button", string>;
      type bar_yellow = __UIComponent<fairygui.GComponent, {}, string, string>;
      type progressBar_yellow = __UIComponent<
        fairygui.GProgressBar,
        { bar: Components.bar_yellow; barTitle: fairygui.GTextField },
        string,
        string
      >;
      type btnTreasureMapClose = __UIComponent<fairygui.GButton, {}, "button", string>;
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
          btnCreate: Components.MiddleLeft.BtnTeamCreate;
          btnSearch: Components.MiddleLeft.BtnTeamSearch;
        },
        "hasTeam",
        string
      >;
      type MainUITeamMemberRender = __UIComponent<
        fairygui.GButton,
        {
          isLeader: fairygui.GImage;
          hp: Components.TopLeft.progressBar_hp;
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
      type PlaceHolder = __UIComponent<fairygui.GComponent, {}, string, string>;
      type AtkModeView = __UIComponent<
        fairygui.GComponent,
        {
          btnPeace: Components.TopLeft.BtnBaseMode;
          btnTeam: Components.TopLeft.BtnBaseMode;
          btnGuild: Components.TopLeft.BtnBaseMode;
          btnGoodEvil: Components.TopLeft.BtnBaseMode;
          btnAll: Components.TopLeft.BtnBaseMode;
          btnCamp: Components.TopLeft.BtnBaseMode;
          btnCrossServer: Components.TopLeft.BtnBaseMode;
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
      type progressBar_hp = __UIComponent<fairygui.GProgressBar, { bar: Components.TopLeft.bar_hp }, string, string>;
      type progressBar_mp = __UIComponent<fairygui.GProgressBar, { bar: Components.TopLeft.bar_mp }, string, string>;
      type progressBar_xp = __UIComponent<fairygui.GProgressBar, { bar: Components.TopLeft.bar_xp }, string, string>;
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
          close: Components.TopMiddle.Button_Close3;
          comMid: Components.TopMiddle.ComHp;
          comUp: Components.TopMiddle.ComHp;
          roleHead: fairygui.GLoader;
          btnRole: Components.TopMiddle.BtnEmpty;
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
          comDown: Components.TopMiddle.ComHp;
          comMid: Components.TopMiddle.ComHp;
          comUp: Components.TopMiddle.ComHp;
          shieldBar: Components.TopMiddle.BarShiled;
          bgCount: fairygui.GImage;
          txtHpCount: fairygui.GTextField;
          countGroup: fairygui.GGroup;
          bufflist: fairygui.GList;
          touchCloseLayer: Components.TopLeft.PlaceHolder;
          comName: Components.TopMiddle.comNameBossH;
          textHp: fairygui.GTextField;
          roleHead: fairygui.GLoader;
          txtBelong: fairygui.GTextField;
          btnEye: Components.TopMiddle.ButtonEye;
          dropCom: Components.TopMiddle.BossDropCom;
        },
        "typeCtrl",
        string
      >;
      type ButtonGangCall = __UIComponent<fairygui.GButton, {}, string, string>;
      type MonsterHeadInfo = __UIComponent<
        fairygui.GComponent,
        {
          barHp: Components.TopMiddle.progressBar_monster;
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
      type BtnEmpty = __UIComponent<fairygui.GButton, {}, "button", string>;
      type progressBar_monster = __UIComponent<
        fairygui.GProgressBar,
        { bg: fairygui.GImage; bar: Components.TopMiddle.ComHp },
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
          barHp: Components.TopMiddle.progressBar_monster;
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
          btnAttack: Components.BottomRight.Near.AttackBtn;
          btnPlayer: _uionr2r4.Components.tab.tab_1;
          btnBoss: _uionr2r4.Components.tab.tab_1;
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
        { btnClose: Components.Pop.PopClose; tip: fairygui.GRichTextField; btnCon: Components.Pop.emptyBtn },
        string,
        string
      >;
      type PopClose = __UIComponent<fairygui.GButton, {}, string, string>;
      type PopMiddleRight = __UIComponent<
        fairygui.GComponent,
        { btnClose: Components.Pop.PopClose; tip: fairygui.GTextField; btnCon: Components.emptyBtn },
        "button",
        string
      >;
      type PopMiddleRight1 = __UIComponent<
        fairygui.GComponent,
        { btnClose: Components.Pop.PopClose; tip: fairygui.GTextField; btnCon: Components.emptyBtn },
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
          btnOk: _uionr2r4.Components.button.Button11;
        },
        string,
        string
      >;
    }
    namespace Components {
      type emptyBtn = __UIComponent<fairygui.GButton, {}, "button", string>;
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
          progress: Components.TopLeft.vip.VipBar;
          progressShare: Components.TopLeft.vip.ProgressShare;
          btnVip: Components.emptyBtn;
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
        { progress: Components.TopLeft.vip.comProgress; iconAlpha: fairygui.GImage; iconRed: fairygui.GImage },
        "button",
        string
      >;
      type comProgress = __UIComponent<fairygui.GComponent, { iconProgress: fairygui.GImage }, string, string>;
      type VipBar = __UIComponent<
        fairygui.GProgressBar,
        { bar: Components.TopLeft.vip.comVip; title: fairygui.GTextField },
        string,
        string
      >;
      type ProgressShare = __UIComponent<
        fairygui.GProgressBar,
        { iconBack: fairygui.GImage; bar_v: Components.TopLeft.vip.comProgress; iconLingth: fairygui.GImage },
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
          btnClose: Components.ActList.ButtonClose;
          btnHint: _uionr2r4.Components.button.CheckBox1;
          btnEnter: Components.ActList.ButtonEnter;
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
          btnClose: Components.ActList.ButtonClose;
          btnEnter: Components.ActList.ButtonEnter;
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
  import _uionr2r4 = UILib;
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
        { itemRender: Components.render.RewardRender; nopay: fairygui.GLoader },
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
        { bg: fairygui.GLoader; imgIcon: fairygui.GLoader; txtType: fairygui.GTextField },
        string,
        string
      >;
      type SkillPRender = __UIComponent<
        fairygui.GComponent,
        { bg: fairygui.GLoader; imgIcon: fairygui.GLoader; txtType: fairygui.GTextField },
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
          com100: Components.money.MoneyItem;
          com102: Components.money.MoneyItem;
          com101: Components.money.MoneyItem;
          com209: Components.money.MoneyItem;
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
      type ButtonClose = __UIComponent<fairygui.GButton, { title: fairygui.GTextField }, "button", string>;
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
        { bar: Components.progressBar.bar_yellow; title: fairygui.GTextField },
        string,
        string
      >;
      type progressBar_green = __UIComponent<
        fairygui.GProgressBar,
        { bar: Components.progressBar.bar_green; title: fairygui.GTextField },
        string,
        string
      >;
      type progressBar_white = __UIComponent<
        fairygui.GProgressBar,
        { bar: Components.progressBar.bar_white },
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
        { btnWindow: Components.DisLimit.ButtonDisLimit; txtTime: fairygui.GTextField },
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
        { bar: Components.slider.comSlider1; grip: Components.slider.Slider1_grip },
        string,
        string
      >;
      type comSlider1 = __UIComponent<fairygui.GComponent, { iconBack: fairygui.GImage }, string, string>;
      type comSilder2 = __UIComponent<fairygui.GComponent, { iconBack: fairygui.GImage }, string, string>;
      type Slider2_grip = __UIComponent<fairygui.GButton, {}, "button", string>;
      type Slider2 = __UIComponent<
        fairygui.GSlider,
        { bar: Components.slider.comSilder2; grip: Components.slider.Slider2_grip },
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
        { bar: Components.progressBar.bar_green; title: fairygui.GTextField },
        string,
        string
      >;
      type progressBar_white = __UIComponent<
        fairygui.GProgressBar,
        { bar: Components.progressBar.bar_white },
        string,
        string
      >;
      type progressBar_yellow = __UIComponent<
        fairygui.GProgressBar,
        { bar: Components.progressBar.bar_yellow; title: fairygui.GTextField },
        string,
        string
      >;
    }
    namespace Components.tips {
      type PassiveSkillTipWindow = __UIComponent<
        fairygui.GComponent,
        {
          thump_skill: fairygui.GImage;
          itemRender: Components.render.SkillPRender;
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
          itemRender: Components.render.SkillRender;
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
          itemRender: Components.render.SkillRender;
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
          itemRender: Components.render.SkillPRender;
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
        { equipL: Components.guardView.GuardRender; equipD: Components.guardView.GuardRender },
        string,
        string
      >;
    }
  }
}
