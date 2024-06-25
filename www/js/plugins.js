// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.51 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"false","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"MOG_ATB","status":true,"description":"(v0.3 *) Sistema de batalha em tempo real.","parameters":{"ATB Mode":"2","ATB Max Value":"4000","Turn Duration":"480","States Duration":"180","Escape Duration":"180","Skip Emerge Message":"true","Full SE":"audio/se/Book1","Change Actor Left":"pagedown","Change Actor Right":"pageup","Escape Button":"cancel","Escape Layout X":"600","Escape Layout Y":"64","Escape Gauge X":"6","Escape Gauge Y":"16"}},
{"name":"MOG_ATB_Gauge","status":true,"description":"(v1.0) Apresenta a Hud de ATB para MOG_ATB.","parameters":{"Hud Angle":"0","Hud X-Axis":"740","Hud Y-Axis":"45","Enemy X-Axis Offset":"16","Actor X-Axis Offset":"-16","Active X-Axis":"-3","Active Y-Axis":"30","Gauge Size":"160","Skill Visible":"true","Skill Zoom":"0.6","Skill X-Axis":"0","Skill Y-Axis":"0"}},
{"name":"Irina_ActionCutins","status":false,"description":"<ActionCutins> for RPG Maker MV version 1.6.2.","parameters":{"":"","General":"","aboveOrBelowWindowLayer":"true","defaultAllSkillsHaveCutins":"false","defaultAllItemsHaveCutins":"false","defaultAllPhysicalHaveCutins":"false","defaultAllMagicalHaveCutins":"false","defaultAllCertainHaveCutins":"false","Templates":"[\"{\\\"Name\\\":\\\"Example\\\",\\\"Code\\\":\\\"\\\\\\\"for (var i = 0; i < battlers.length; i++) {\\\\\\\\n   // Get current battler.\\\\\\\\n   var battler = battlers[i];\\\\\\\\n\\\\\\\\n   // Get current settings or make new default settings.\\\\\\\\n   var settings = settings || $actionCutinSettings();\\\\\\\\n\\\\\\\\n   // Display action cutin\\\\\\\\n   $actionCutin(battler, settings);\\\\\\\\n}\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Horizontal\\\",\\\"Code\\\":\\\"\\\\\\\"var totalTime = Math.max(120, 80 + (battlers.length * 10));\\\\\\\\nfor (var i = 0; i < battlers.length; i++) {\\\\\\\\n    var battler = battlers[i];\\\\\\\\n    var settings = JsonEx.makeDeepCopy(settings) || $actionCutinSettings();\\\\\\\\n    settings.height = Math.round(Graphics.boxHeight / battlers.length) - (settings.borderThickness * 2);\\\\\\\\n    settings.y = settings.height * (i + 0.5) + (settings.borderThickness * 2 * (i + 0.5));\\\\\\\\n    settings.forcedScale = 5.0;\\\\\\\\n    settings.forcedOffsetY = 48;\\\\\\\\n    settings.shiftDistanceX = 400;\\\\\\\\n    settings.shiftDistanceY = 0;\\\\\\\\n    settings.duration = totalTime - (i * 10);\\\\\\\\n    settings.backgroundHue = i * Math.round(360 / battlers.length);\\\\\\\\n    var time = 1000 / 60 * i * 10;\\\\\\\\n    setTimeout($actionCutin.bind(this, battler, settings), time);\\\\\\\\n}\\\\\\\"\\\"}\",\"{\\\"Name\\\":\\\"Vertical\\\",\\\"Code\\\":\\\"\\\\\\\"var totalTime = Math.max(120, 80 + (battlers.length * 10));\\\\\\\\nfor (var i = 0; i < battlers.length; i++) {\\\\\\\\n    var battler = battlers[i];\\\\\\\\n    var settings = JsonEx.makeDeepCopy(settings) || $actionCutinSettings();\\\\\\\\n    settings.width = Math.round(Graphics.boxWidth / battlers.length) - (settings.borderThickness * 2);\\\\\\\\n    settings.height = Graphics.boxHeight * 1.20;\\\\\\\\n    settings.x = settings.width * i + (settings.borderThickness * 2 * (i + 0.5));\\\\\\\\n    settings.forcedScale = 'auto';\\\\\\\\n    settings.shiftDistanceX = 0;\\\\\\\\n    settings.shiftDistanceY = 400 * (i % 2 === 0 ? 1 : -1);\\\\\\\\n    settings.duration = totalTime - (i * 10);\\\\\\\\n    settings.backgroundHue = i * Math.round(360 / battlers.length);\\\\\\\\n    var time = 1000 / 60 * i * 10;\\\\\\\\n    setTimeout($actionCutin.bind(this, battler, settings), time);\\\\\\\\n}\\\\\\\"\\\"}\"]","Speedlines":"","defaultSpeedlineImg":"Speedlines","defaultSpeedlineHue":"0","defaultSpeedlineBlendMode":"1","defaultBorderThickness":"5","defaultBorderColor":"blue","SpeedlinePositions":"","defaultSpeedlineScreenX":"0","defaultSpeedlineScreenY":"Graphics.boxHeight / 2","defaultSpeedlineWidth":"Graphics.boxWidth","defaultSpeedlineHeight":"500","defaultSpeedlineScrollX":"40","defaultSpeedlineScrollY":"0","Face":"","defaultFaceShiftDistanceX":"480","defaultFaceShiftDistanceY":"0","defaultFaceShiftFrames":"16","defaultFaceAntiAlias":"false","AutoFlash":"","defaultAutoFlash":"true","defaultFlashColor":"255 255 255 170","defaultFlashDuration":"20","AutoShake":"","defaultAutoShake":"true","defaultShakePower":"5","defaultShakeSpeed":"5","defaultShakeDuration":"20","AutoSound":"","defaultAutoSound":"true","defaultSoundName":"Magic3","defaultSoundVolume":"90","defaultSoundPitch":"150","defaultSoundPan":"0","Other":"","defaultDuration":"90","defaultOpacitySpeed":"16"}},
{"name":"YEP_X_ActSeqPack1","status":true,"description":"v1.13 (Requires YEP_BattleEngineCore.js) Basic functions are\nadded to the Battle Engine Core's action sequences.","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":true,"description":"v1.13 (Requires YEP_BattleEngineCore.js) Visual functions\nare added to the Battle Engine Core's action sequences.","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":false,"description":"v1.05 (Requires YEP_BattleEngineCore.js) Camera control is\nadded to the Battle Engine Core's action sequences.","parameters":{"Camera Option":"Battle Camera"}},
{"name":"YEP_EventEncounterAid","status":true,"description":"v1.01 This plugin helps make eventable encounters easier\nand determine player position relative to the event.","parameters":{}},
{"name":"YEP_SaveEventLocations","status":true,"description":"v1.06 Enable specified maps to memorize the locations of\nevents when leaving and loading them upon reentering map.","parameters":{}},
{"name":"YEP_MoveRouteCore","status":true,"description":"v1.04 Expand the number of movement options for the move\nroute events using this plugin.","parameters":{}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.04 Use regions to block out Events and/or the player from\nbeing able to venture into those spots.","parameters":{"Player Restrict":"0","Event Restrict":"255","All Restrict":"0","Player Allow":"0","Event Allow":"0","All Allow":"0"}},
{"name":"VE_BasicModule","status":true,"description":"v1.23 - Plugin with base code required for all Victor Engine plugins.","parameters":{"== Trait Names ==":"","Hit Rate Name":"Hit","Evasion Rate Name":"Evasion","Critical Rate Name":"Critical","Critical Evasion Name":"C. Evasion","Magic Evasion Name":"M. Evasion","Magic Reflection Name":"M. Reflection","Counter Attack Name":"Counter","HP Regeneration Name":"HP Regen","MP Regeneration Name":"MP Regen","TP Regeneration Name":"TP Regen","Target Rate Name":"Target Rate","Guard Rate Name":"Guard Rate","Recovery Effect Name":"Recovery","Pharmacology Name":"Pharmacology","MP Cost Rate Name":"MP Cost","TP Charge Rate Name":"TP Charge","Physical Damage Name":"Physical Damage","Magical Damage Name":"Magical Damage","Floor Damage Name":"Floor Damage","Experience Rate Name":"Exp. Rate\r"}},
{"name":"VE_BattlerGraphicSetup","status":true,"description":"v1.09 - Use different models for battler graphics.","parameters":{"Actor Sprite Mode":"Static","Enemy Sprite Mode":"Static","Enemy Graphic Sufix":"","Mirror Animations":"true","Animated Enemy State":"icon","== Custom Frames ==":"==============================","Actor Frame Setup":"","Enemy Frame Setup":"","== Motion Setup ==":"==============================","Idle Motion Setup":"index: 1, loop: true, speed: 12","Walk Motion Setup":"index: 2, loop: true, speed: 12","Wait Motion Setup":"index: 2, loop: true, speed: 12","Chant Motion Setup":"index: 3, loop: true, speed: 12","Guard Motion Setup":"index: 4, loop: true, speed: 12","Damage Motion Setup":"index: 5, loop: false, speed: 12","Evade Motion Setup":"index: 6, loop: true, speed: 12","Thrust Motion Setup":"index: 7, loop: false, speed: 12","Swing Motion Setup":"index: 8, loop: false, speed: 12","Missile Motion Setup":"index: 9, loop: false, speed: 12","Skill Motion Setup":"index: 10, loop: false, speed: 12","Spell Motion Setup":"index: 11, loop: false, speed: 12","Item Motion Setup":"index: 12, loop: false, speed: 12","Escape Motion Setup":"index: 13, loop: true, speed: 12","Return Motion Setup":"index: 13, loop: true, speed: 12","Victory Motion Setup":"index: 14, loop: true, speed: 12","Dying Motion Setup":"index: 15, loop: true, speed: 12","Abnormal Motion Setup":"index: 16, loop: true, speed: 12","Sleep Motion Setup":"index: 17, loop: true, speed: 12","Dead Motion Setup":"index: 18, loop: true, speed: 12\r"}},
{"name":"MOG_TrPopUpBattle","status":true,"description":"(v1.0) Apresenta os ícones dos tesouros após o inimigo morrer.","parameters":{"Drop Item Real Time":"true","Animation Type":"0","Fade Duration":"20","Scale":"0.8"}},
{"name":"MOG_TreasurePopup","status":true,"description":"(v1.1) Apresenta o ícone e o nome do tesouro ganho.","parameters":{"Duration":"15","Fade Speed":"5","X - Axis":"0","Y - Axis":"-32","Random Movement":"false","X Speed":"0","Y Speed":"1","Font Size":"16","Icon Scale":"0.60","Treasure Space Y-Axis":"20","Zoom Effect":"false","Gold Popup":"true","Gold Icon Index":"163"}},
{"name":"MOG_OugiAnimation","status":false,"description":"(v1.3) Ativa uma animação antes de executar a ação.","parameters":{"For Enemies":"false"}},
{"name":"Olivia_AntiPlayerStress","status":true,"description":"<AntiPlayerStress> for RPG Maker MV version 1.6.1.","parameters":{"":"","ATTENTION!!!":"!!! READ THE HELP FILE !!!","Center Title Command":"true","Default Options":"","Always Dash":"false","Command Remember":"true","Default Volume":"40","Encounter Rate Minimum":"10","Escape Always":"true","Hit Rate Stacking":"true","Level Up":"","Recover Full HP":"true","Recover Full MP":"true","Proper Error Display":"true"}},
{"name":"Olivia_BattleSysOTB","status":false,"description":"<BattleSysOTB> for RPG Maker MV version 1.6.1.","parameters":{"":"","ATTENTION!!!":"READ THE HELP FILE","Warning OTB":"Requires YEP_BattleEngineCore","OTB Force Battle System":"true","OTB Mechancs":"","OTB Mechanics Action Speed Convert":"true","OTB Mechanics Buff Debuff AGI Convert":"true","OTB Mechanics Added Action Times":"true","OTB Mechanics Action Time Order Randomize":"true","OTB Mechanics Enable Party Window":"false","OTB Mechanics Escape Actor Window":"true","OTB Mechanics Remove Restrict Current":"true","OTB Mechanics Remove Restrict Next":"true","OTB Mechanics Static AGI Calculation":"true","OTB Mechanics Stun Wakeup First":"true","OTB Mechanics Stun Wakeup Clamp":"true","OTB Visuals":"","OTB Sprite Background Colors":"","OTB Background Actor Color":"rgba(128, 160, 255, 0.6)","OTB Background Enemy Color":"rgba(255, 100, 80, 0.6)","OTB Turn Order Display":"","OTB Display X":"48","OTB Display Y":"18","OTB Display Help Window Move Y":"18","OTB Display Help Window Move Speed":"16","OTB Display Current Text":"CURRENT","OTB Display Current Size":"20","OTB Display Next Text":"NEXT","OTB Display Next Size":"20","OTB Sprite Properties":"","OTB Sprite Move Duration":"20","OTB Sprite Opacity Speed":"16","OTB Battle Scene Properties":"","OTB Help Window Y":"92","OTB Log Window Y":"92"}},
{"name":"Olivia_OTB_Customize","status":true,"description":"Customize the OTB Turn Order Display","parameters":{"":"","ATTENTION!!!":"READ THE HELP FILE"}}
];