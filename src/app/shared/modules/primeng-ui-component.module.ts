import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeng component modules
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TooltipModule } from 'primeng/tooltip';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { InputMaskModule } from "primeng/inputmask";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ColorPickerModule } from 'primeng/colorpicker';
import { SliderModule } from 'primeng/slider';
import { DataViewModule } from 'primeng/dataview';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { StepsModule } from 'primeng/steps';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ScrollTopModule } from 'primeng/scrolltop';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitterModule } from 'primeng/splitter';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { GMapModule } from 'primeng/gmap';

import {PaginatorModule} from 'primeng/paginator';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ScrollerModule} from 'primeng/scroller';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DragDropModule} from 'primeng/dragdrop';
import {InplaceModule} from 'primeng/inplace';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {AutoFocusModule} from 'primeng/autofocus';
import {AnimateModule} from 'primeng/animate';
import {EditorModule} from 'primeng/editor';
import {KeyFilterModule} from 'primeng/keyfilter';
import {TreeSelectModule} from 'primeng/treeselect';
import {SpeedDialModule} from 'primeng/speeddial';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [
        FormsModule,

        //primeng component modules
        ProgressBarModule,
        AvatarModule,
        ScrollPanelModule,
        TagModule,
        SkeletonModule,
        AvatarGroupModule,
        ScrollTopModule,
        OverlayPanelModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        AccordionModule,
        TabViewModule,
        FieldsetModule,
        SplitterModule,
        TreeModule,
        TreeTableModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        InputMaskModule,
        MultiSelectModule,
        CascadeSelectModule,
        KnobModule,
        ListboxModule,
        SelectButtonModule,
        ColorPickerModule,
        SliderModule,
        DataViewModule,
        PickListModule,
        OrderListModule,
        ImageModule,
        GalleriaModule,
        CarouselModule,
        BreadcrumbModule,
        MenubarModule,
        TabMenuModule,
        StepsModule,
        TieredMenuModule,
        ContextMenuModule,
        MegaMenuModule,
        MessagesModule,
        MessageModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        ButtonModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        CheckboxModule,
        PasswordModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        DividerModule,
        PanelModule,
        FileUploadModule,
        ChipModule,
        TooltipModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextareaModule,
        DropdownModule,
        InputNumberModule,
        DialogModule,
        TimelineModule,
        CardModule,
        SplitButtonModule,
        ToggleButtonModule,
        GMapModule,
        PaginatorModule,
        OrganizationChartModule,
        VirtualScrollerModule,
        ScrollerModule,
        DynamicDialogModule,
        InplaceModule,
        DragDropModule,
        ProgressSpinnerModule,
        AutoFocusModule,
        AnimateModule,
        EditorModule,
        KeyFilterModule,
        TreeSelectModule,
        SpeedDialModule,

        // translate i18n
        TranslateModule

    ],
    providers: [],
})
export class PrimeNgUIComponentModule {}
