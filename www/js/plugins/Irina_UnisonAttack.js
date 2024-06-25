/*:
 * @plugindesc <UnisonAttack> for RPG Maker MV version 1.6.2.
 * @author RPG Maker Irina
 *
 * @help
 * *** Introduction ***
 *
 * If two characters happen to pick the right combination of skills during
 * battle, they can perform a Unison Attack! Unison Attacks are predetermined
 * in the database and require specific combinations of skills to work. This
 * can come in the form of dual techs, triple techs, quadra techs, etc.
 *
 * Note: This plugin requires Yanfly's Battle Engine Core and can only be used
 * with DTB or other battle systems that queue up skills, such as the Default
 * Battle System. The reason this cannot be used with other battle systems like
 * ATB, CTB, STB, or OTB is because those battle systems are unable to queue up
 * skills, which are required for Unison Attacks.
 *
 *
 *
 * *** Notetags ***
 *
 * Skill Notetags:
 *
 *   <Unison Skill: x, x>
 *   <Unison Skill: x, x, x>
 *   <Unison Skill: x, x, x, x>
 *   - Replace 'x' with the skill ID's required for this Unison Attack to work.
 *   - Insert as many skill ID's as needed.
 *   - Once all the skills are found queued in the party, a Unison Attack will
 *   occur. Only the actor party can perform Unison Attacks.
 *   - Skills that become Unison Attacks cannot be directly used from the menu
 *   in order to avoid script crashes.
 *
 *   <Unison Skill Priority: x>
 *   - 'x' determines the priority value of the Unison Attack.
 *   - If multiple recipes for a Unison Attack are found, then the Unison Skill
 *   with the highest priority value will occur. If they're tied, then a random
 *   possible Unison Skill combination of the highest priority is chosen.
 *
 *
 *
 * *** Damage Formulas and Script Calls ***
 * 
 *     Those who want to grab specific Unison Skill participating members can
 * use the following variables to grab them:
 *
 *     $UnisonMember1
 *     $UnisonMember2
 *     $UnisonMember3
 *     $UnisonMember4
 *
 *     Each number refers to the participant using the ordered skill in the
 * <Unison Skill: x> notetag. Let's take a look below:
 *
 *     If this notetag is used: <Unison Skill: 50, 40, 30, 20>
 *
 *     then the members will refer to the following:
 *
 *     $UnisonMember1 = User of Skill 50
 *     $UnisonMember2 = User of Skill 40
 *     $UnisonMember3 = User of Skill 30
 *     $UnisonMember4 = User of Skill 20
 *
 *     This is used the same way in Script Calls. Once the skill has completed,
 * these variables will be cleared.
 *
 *
 *
 * *** Action Sequences: $UnisonMember ***
 * 
 *      Before I begin on the Action Sequences, I want to say there's two new
 * additions to the targeting mechanism. You know the parts where you put in
 * "user" or "targets"? There are new target typings to choose from.
 *
 *   $UnisonMember1
 *   - Selects the first participating member of a Unison Attack. This will be
 *   the skill user whose using the first listed skill in <Unison Skill: x>
 *   notetag list.
 *
 *   $UnisonMember2
 *   - Selects the 2nd participating member of a Unison Attack. This will be
 *   the skill user whose using the 2nd listed skill in <Unison Skill: x>
 *   notetag list.
 *
 *   $UnisonMember3
 *   - Selects the 3rd participating member of a Unison Attack. This will be
 *   the skill user whose using the 3rd listed skill in <Unison Skill: x>
 *   notetag list.
 *
 *   $UnisonMember4
 *   - Selects the 4th participating member of a Unison Attack. This will be
 *   the skill user whose using the 4th listed skill in <Unison Skill: x>
 *   notetag list.
 *
 *   And so on...
 *
 *   $UnisonMembers
 *   - Selects all participating members of a Unison Attack.
 *
 * 
 *
 * *** RPG Maker Version ***
 *
 * This plugin is made for and tested on RPG Maker MV with version 1.6.2.
 * I cannot guarantee if it works on lower versions.
 *
 *
 *
 * *** Terms of Use ***
 * 
 * 1. These plugins may be used in free or commercial games.
 * 2. 'RPG Maker Irina' must be given credit in your games.
 * 3. You are allowed to edit the code.
 * 4. Do NOT change the filename, parameters, and information of the plugin.
 * 5. You are NOT allowed to redistribute these Plugins.
 * 6. You may NOT take code for your own released Plugins.
 *
 * *** Help End ***
 *
 * @param 
 *
 */
//=============================================================================

var Imported=Imported||{};Imported.Irina_UnisonAttack={};if(!Imported.YEP_BattleEngineCore){alert("Irina_UnisonAttack plugin requires YEP_BattleEngineCore plugin installed.");SceneManager.exit()}Imported.Irina_UnisonAttack.BattleManager_startBattle=BattleManager.startBattle;BattleManager.startBattle=function(){UnisonAttack.makeSkillCombinations();Imported.Irina_UnisonAttack.BattleManager_startBattle.call(this)};Imported.Irina_UnisonAttack.BattleManager_startAction=BattleManager.startAction;BattleManager.startAction=function(){UnisonAttack.checkDTB();Imported.Irina_UnisonAttack.BattleManager_startAction.call(this)};Imported.Irina_UnisonAttack.BattleManager_endAction=BattleManager.endAction;BattleManager.endAction=function(){UnisonAttack.ClearUnisonMembers();Imported.Irina_UnisonAttack.BattleManager_endAction.call(this)};Imported.Irina_UnisonAttack.BattleManager_makeActionTargets=BattleManager.makeActionTargets;BattleManager.makeActionTargets=function(string){if(string.match(/\$UNISONMEMBER(\d+)/i)){var memberId=Number(RegExp.$1);return[window["$UnisonMember"+memberId]||this._subject]}else if(string.match(/\$UNISONMEMBERS/i)){if(!UnisonAttack._allMembers)return[this._subject];if(UnisonAttack._allMembers.length<=0)return[this._subject];return UnisonAttack._allMembers.clone()}return Imported.Irina_UnisonAttack.BattleManager_makeActionTargets.call(this,string)};Imported.Irina_UnisonAttack.Window_SkillList_isEnabled=Window_SkillList.prototype.isEnabled;Window_SkillList.prototype.isEnabled=function(item){if(item&&item.note.match(/<(?:Unison Skill|Unison Attack)(.*)>/i))return false;return Imported.Irina_UnisonAttack.Window_SkillList_isEnabled.call(this,item)};function UnisonAttack(){throw new Error("This is a static class")}UnisonAttack.makeSkillCombinations=function(){this._allMembers=[];this._allKeys=[];if(this._madeUnisonSkillCombinations)return;this._madeUnisonSkillCombinations=true;for(var s=1;s<$dataSkills.length;s++){var skill=$dataSkills[s];if(skill.note.match(/<(?:Unison Skill|Unison Attack):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){var array=JSON.parse("["+RegExp.$1.match(/\d+/g)+"]").sort(function(a,b){return a-b});skill.unisonSkillCombination=array;for(var i=0;i<array.length;i++){var arraySkill=$dataSkills[array[i]];if(arraySkill){arraySkill.unisonSkillResults=arraySkill.unisonSkillResults||[];arraySkill.unisonSkillResults.push(skill.id)}}}if(skill.note.match(/<(?:Unison Skill|Unison Attack) Priority:[ ](.*)>/i)){skill.unisonSkillPriority=Number(RegExp.$1)}else{skill.unisonSkillPriority=50}}};UnisonAttack.checkUnisonSkillIngredient=function(skill){if(!skill)return;return skill.unisonSkillResults&&skill.unisonSkillResults.length>0};UnisonAttack.getUnisonSkillPossibilities=function(skill){var results=[];if(skill.unisonSkillResults&&skill.unisonSkillResults.length>0){results=results.concat(skill.unisonSkillResults)}return results};UnisonAttack.checkDTB=function(){if(!this.initialCheckDTB())return;var possibilities=this.getUnisonSkillPossibilities(BattleManager._subject.currentAction().item());var skills=this.getValidPossibileUnisonAttacks(possibilities);this.sortUnisonAttacksByPriority(skills);this.assignUnisonSkillBattleMembers(skills)};UnisonAttack.initialCheckDTB=function(){if(!BattleManager.isDTB())return false;if(!BattleManager._subject)return false;if(BattleManager._subject.isEnemy())return false;if($gameParty.aliveMembers().length<=1)return false;var action=BattleManager._subject.currentAction();if(!action)return false;if(!action.isSkill())return false;if(!UnisonAttack.checkUnisonSkillIngredient(action.item()))return false;return true};UnisonAttack.getValidPossibileUnisonAttacks=function(possibilities){var results=[];for(var i=0;i<possibilities.length;i++){var unisonSkill=$dataSkills[possibilities[i]];if(this.checkUnisonAttackCombinationAvailabilityDTB(unisonSkill)){results.push(unisonSkill)}}return results};UnisonAttack.checkUnisonAttackCombinationAvailabilityDTB=function(unisonSkill){if(!unisonSkill)return false;if(!unisonSkill.unisonSkillCombination)return false;if(unisonSkill.unisonSkillCombination.length<=0)return false;var combination=unisonSkill.unisonSkillCombination;var members=$gameParty.aliveMembers().clone();for(var i=0;i<combination.length;i++){var skill=$dataSkills[combination[i]];if(!this.checkAnyPartyMembersIfSkillIsQueued(members,skill))return false}return true};UnisonAttack.checkAnyPartyMembersIfSkillIsQueued=function(members,targetSkill){for(var i=0;i<members.length;i++){var member=members[i];if(!this.checkPartyMembersIfSkillIsQueued(member,targetSkill))continue;members.splice(members.indexOf(member),1);return member}return false};UnisonAttack.checkPartyMembersIfSkillIsQueued=function(member,targetSkill){if(!member)return false;if(!member.currentAction())return false;if(member.currentAction().item()!==targetSkill)return false;if(!member.canMove())return false;if(!member.canUse(targetSkill))return false;return true};UnisonAttack.sortUnisonAttacksByPriority=function(unisonSkills){unisonSkills.sort(function(a,b){var p1=a.unisonSkillPriority;var p2=b.unisonSkillPriority;if(p1!==p2){return p2-p1}if(Math.random()>.5){return a.id-b.id}else{return b.id-a.id}})};UnisonAttack.assignUnisonSkillBattleMembers=function(unisonSkills){var targetSkill=unisonSkills.shift();this._allMembers=[];this._allKeys=[];if(targetSkill){var ingredientSkills=targetSkill.unisonSkillCombination.clone();var availableMembers=$gameParty.aliveMembers().clone();var memberCount=0;var member=BattleManager._subject;member.paySkillCost(member.currentAction().item());var index=ingredientSkills.indexOf(member.currentAction().item().id);ingredientSkills.splice(index,1);availableMembers.splice(availableMembers.indexOf(member),1);var key="$UnisonMember"+(index+1);window[key]=BattleManager._subject;this._allMembers.push(window[key]);this._allKeys.push(key);for(var i=0;i<ingredientSkills.length;i++){memberCount+=1;if(window["$UnisonMember"+memberCount])memberCount+=1;var ingredientSkill=$dataSkills[ingredientSkills[i]];var targetMember=this.checkAnyPartyMembersIfSkillIsQueued(availableMembers,ingredientSkill);if(targetMember){targetMember.paySkillCost(targetMember.currentAction().item());var key="$UnisonMember"+memberCount;window[key]=targetMember;this._allMembers.push(window[key]);this._allKeys.push(key);targetMember.currentAction().clear()}}BattleManager._subject.currentAction().setSkill(targetSkill.id)}};UnisonAttack.ClearUnisonMembers=function(){if(!this._allKeys)return;for(var i=0;i<this._allKeys.length;i++){var key=this._allKeys[i];window[key]=undefined}this._allMembers=[];this._allKeys=[]};