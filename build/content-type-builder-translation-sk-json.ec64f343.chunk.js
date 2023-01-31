"use strict";
(self["webpackChunkproject_kru_2023"] = self["webpackChunkproject_kru_2023"] || []).push([[7997],{

/***/ 17220:
/***/ ((module) => {

module.exports = JSON.parse('{"attribute.boolean":"Logická hodnota","attribute.boolean.description":"áno/nie, 1/0, pravda/lož","attribute.component":"Komponent","attribute.component.description":"Skupina políčok, ktoré je možné opakovane používať","attribute.date":"Dátum a čas","attribute.date.description":"Dialóg pre výber dátumu a času","attribute.datetime":"Dátum a čas","attribute.dynamiczone":"Dynamická zóna","attribute.dynamiczone.description":"Umožňuje dynamicky zvoliť komponenty počas úpravy obsahu","attribute.email":"E-mailová adresa","attribute.email.description":"Políčko s automatickou validáciou formátu e-mailovej adresy","attribute.enumeration":"Vymenovanie","attribute.enumeration.description":"Zoznam preddefinovaných hodnôt s výberom jednej možnosti","attribute.json":"JSON","attribute.json.description":"Dáta vo formáte JSON","attribute.media":"Súbory","attribute.media.description":"Napr. obrázky, videá, atď.","attribute.null":" ","attribute.number":"Číslo","attribute.number.description":"Čísla (celé, desatinné)","attribute.password":"Heslo","attribute.password.description":"Políčko pre zadanie hesla","attribute.relation":"Relácia","attribute.relation.description":"Určuje vzťah k inému Typu obsahu","attribute.richtext":"Textový editor","attribute.richtext.description":"Textové pole s možnosťami formátovania","attribute.text":"Text","attribute.text.description":"Krátky alebo dlhší text","attribute.time":"Čas","attribute.timestamp":"Timestamp - Časový odtlačok","attribute.uid":"UID","attribute.uid.description":"Unikátny identifikátor","button.attributes.add.another":"Pridať ďalšie políčko","button.component.add":"Pridať komponent","button.component.create":"Vytvoriť nový komponent","button.model.create":"Vytvoriť nový Typ obsahu","button.single-types.create":"Vytvoriť nový jednorazový typ","component.repeatable":"(opakujúce)","components.componentSelect.no-component-available":"Už ste pridali všetky komponenty","components.componentSelect.no-component-available.with-search":"Nenašiel sa žiaden komponent splňujúci výraz","components.componentSelect.value-component":"Označené komponenty: {number} (zadajte hľadaný text)","components.componentSelect.value-components":"Označené komponenty: {number}","configurations":"nastavenia","contentType.collectionName.description":"Užitočné, ak má byť názov kolekcie (v dashboard) iný ako meno tabuľky","contentType.collectionName.label":"Meno kolekcie","contentType.displayName.label":"Názov kolekcie","contentType.draftAndPublish.description":"Pred zverejnením vytvárať verziu návrhu každej položky","contentType.draftAndPublish.label":"Draft/publish systém","contentType.kind.change.warning":"Práve ste zmenili druh typu obsahu: API bude obnovené (routes, controllers a services budú prepísané)","error.attributeName.reserved-name":"Tento názov je vyhradený a nemôže byť použitý (hrozí poškodenie iných funkcionalít systému)","error.contentTypeName.reserved-name":"Tento názov je vyhradený a nemôže byť použitý (hrozí poškodenie iných funkcionalít systému)","error.validation.enum-duplicate":"Duplicitné hodnoty nie sú povolené","error.validation.minSupMax":"Nemôže byť nadradený","error.validation.regex":"Vzor regulárneho výrazu (regex) je neplatný","error.validation.relation.targetAttribute-taken":"Tento názov už v cieľovom objekte existuje","form.attribute.component.option.add":"Pridať komponent","form.attribute.component.option.create":"Vytvoriť nový komponent","form.attribute.component.option.create.description":"Komponent je dostupný medzi všetkými typmi a komponentami.","form.attribute.component.option.repeatable":"Znovu použiteľný komponent","form.attribute.component.option.repeatable.description":"Ideálne pre viacpoložkové (polia) inštancie ako napríklad meta tagy, ingrediencie, atď..","form.attribute.component.option.reuse-existing":"Použiť existujúci komponent","form.attribute.component.option.reuse-existing.description":"Používajte už vytvorené komponenty pre uchovanie konzistentných dát medzi Typmi obsahu.","form.attribute.component.option.single":"Jednorazový komponent","form.attribute.component.option.single.description":"Vhodné pre zoskúpenie políčok, napr. celá adresa","form.attribute.item.customColumnName":"Vlastné názvy stĺpcov","form.attribute.item.customColumnName.description":"Umožňuje premenovať databázový stĺpček pre potreby API","form.attribute.item.defineRelation.fieldName":"Názov políčka","form.attribute.item.enumeration.graphql":"Názov políčka pre GraphQL","form.attribute.item.enumeration.graphql.description":"Umožňuje prepísať predvolené názvy pre GraphQL","form.attribute.item.enumeration.placeholder":"Napr.:\\nráno\\ndeň\\nvečer","form.attribute.item.enumeration.rules":"Hodnoty (jedna na riadok)","form.attribute.item.maximum":"Maximálna hodnota","form.attribute.item.maximumLength":"Maximálna dĺžka","form.attribute.item.minimum":"Minimálna hodnota","form.attribute.item.minimumLength":"Minimálna dĺžka","form.attribute.item.number.type":"Číselný formát","form.attribute.item.number.type.biginteger":"veľké číslo (napr.: 123456789)","form.attribute.item.number.type.decimal":"desatinné číslo (napr.: 2.22)","form.attribute.item.number.type.float":"desatinné číslo (napr.: 3.33333333)","form.attribute.item.number.type.integer":"celé číslo (napr.: 10)","form.attribute.item.privateField":"Skryté políčko","form.attribute.item.privateField.description":"Toto políčko sa nebude zobrazovať v API","form.attribute.item.requiredField":"Povinné políčko","form.attribute.item.requiredField.description":"Nedovolí vytvoriť záznam ak ostane toto políčko prázdne","form.attribute.item.text.regex":"Vzor regulárneho výrazu (RegExp)","form.attribute.item.text.regex.description":"Text regulárneho výrazu","form.attribute.item.uniqueField":"Unikátne políčko","form.attribute.item.uniqueField.description":"Nedovolí vytvoriť záznam ak už existuje iný záznam s rovnakou hodnotou","form.attribute.media.allowed-types":"Zvoliť povolené typy súborov","form.attribute.media.allowed-types.option-files":"Súbory","form.attribute.media.allowed-types.option-images":"Obrázky","form.attribute.media.allowed-types.option-videos":"Videá","form.attribute.media.option.multiple":"Viacero súborov","form.attribute.media.option.multiple.description":"Vhodné pre galériu, zoznam súborov na stiahnutie","form.attribute.media.option.single":"Jeden súbor","form.attribute.media.option.single.description":"Vhodné pre profilovú fotku alebo hlavný obrázok","form.attribute.settings.default":"Predvolená hodnota","form.attribute.text.option.long-text":"Dlhý text","form.attribute.text.option.long-text.description":"Vhodné pre dlhšie popisy. Presné vyhľadávanie je vypnuté.","form.attribute.text.option.short-text":"Krátky text","form.attribute.text.option.short-text.description":"Vhodné pre nadpisy, názvy, URL adresy. Presné vyhľadávanie je zapnuté.","form.button.add-components-to-dynamiczone":"Pridať komponenty do zóny","form.button.add-field":"Pridať ďalšie políčko","form.button.add-first-field-to-created-component":"Pridať prvé políčko do komponentu","form.button.add.field.to.collectionType":"Pridať ďalšie políčko do tejto kolekcie","form.button.add.field.to.component":"Pridať ďalšie políčko do komponentu","form.button.add.field.to.contentType":"Pridať ďalšie políčko do tohto typu obsahu","form.button.add.field.to.singleType":"Pridať ďalšie políčko do tohto jednorazového typu","form.button.cancel":"Zrušiť","form.button.collection-type.description":"Ideálne pre viacnásobné inštancie ako sú napríklad články, produkty, komentáre, atď.","form.button.configure-component":"Nastaviť komponent","form.button.configure-view":"Upraviť vzhľad","form.button.select-component":"Vybrať komponent","form.button.single-type.description":"Ideálne pre jednorazové inštancie ako sú napríklad domovská stránka, atď.","from":"od","modalForm.attribute.form.base.name.description":"Medzery nie sú povolené v názve políčka","modalForm.attribute.form.base.name.placeholder":"napr. slug, SEO URL, kanonická URL","modalForm.attribute.target-field":"Priložené políčko","modalForm.attributes.select-component":"Vyberte komponent","modalForm.attributes.select-components":"Vyberte komponenty","modalForm.component.header-create":"Vytvorte komponent","modalForm.components.create-component.category.label":"Vyberte kategóriu alebo zadajte názov pre vytvorenie novej","modalForm.components.icon.label":"Ikona","modalForm.editCategory.base.name.description":"Medzery nie sú povolené v názve kategórie","modalForm.header-edit":"Upraviť {name}","modalForm.header.categories":"Kategórie","modalForm.singleType.header-create":"Vytvoriť jednorazový typ","modalForm.sub-header.addComponentToDynamicZone":"Pridať nový komponent do dynamickej zóny","modalForm.sub-header.attribute.create":"Pridať nové políčko {type}","modalForm.sub-header.attribute.create.step":"Pridať nový komponent ({step}/2)","modalForm.sub-header.attribute.edit":"Upraviť {name}","modalForm.sub-header.chooseAttribute.collectionType":"Vyberte typ políčka pre Typ obsahu","modalForm.sub-header.chooseAttribute.component":"Vyberte typ políčka pre komponent","modalForm.sub-header.chooseAttribute.singleType":"Vyberte typ políčka pre jednorazový typ","modelPage.attribute.relation-polymorphic":"Prepojenie (polymorfné)","modelPage.attribute.relationWith":"Prepojenie s","notification.info.autoreaload-disable":"Funkcionalita AutoReload je povinná pre použitie tohto pluginu. Spustite Váš server pomocou príkazu `strapi develop`","notification.info.creating.notSaved":"Uložte zmeny pred vytvorením nového Typu obsahu alebo komponentu","plugin.description.long":"Navrhnite štruktúru webu jednoducho. Vytvorte nové políčka a prepojenia behom pár sekúnd. Súbory sa automaticky vytvoria a upravia v rámci projektu.","plugin.description.short":"Navrhnite štruktúru webu jednoducho.","popUpForm.navContainer.advanced":"Pokročilé nastavenia","popUpForm.navContainer.base":"Základné nastavenia","popUpWarning.bodyMessage.cancel-modifications":"Ste si istý, že chcete zrušiť úpravy?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Ste si istý, že chcete zrušiť úpravy? Niektoré komponenty boli vytvorené alebo upravené...","popUpWarning.bodyMessage.category.delete":"Ste si istý, že chcete odstrániť túto kategóriu? Všetky komponentu budú takisto vymazané.","popUpWarning.bodyMessage.component.delete":"Ste si istý, že chcete odstrániť tento komponent?","popUpWarning.bodyMessage.contentType.delete":"Ste si istý, že chcete odstrániť tento Typ obsahu?","popUpWarning.draft-publish.button.confirm":"Áno, deaktivovať","popUpWarning.draft-publish.message":"Ak deaktivujete Draft/Publish systém, všetky Vaše návrhy (drafts) budú zmazané","popUpWarning.draft-publish.second-message":"Ste si istý, že to chcete deaktivovať?","prompt.unsaved":"Ste si istý, že chcete odísť? Všetky úpravy budú stratené.","relation.attributeName.placeholder":"Napr: autor, kategoria, tag","relation.manyToMany":"má viacero a patrí viacerým","relation.manyToOne":"má viacero","relation.manyWay":"má viacero","relation.oneToMany":"patrí viacerým","relation.oneToOne":"má jeden a patrí jednému","relation.oneWay":"má jeden"}');

/***/ })

}]);