var C999_Common_Cuffs_CurrentStage = 0;
var C999_Common_Cuffs_HasLooseCuffs = false;
var C999_Common_Cuffs_HasKey = false;

// Chapter Common - Cuffs Load
function C999_Common_Cuffs_Load() {

	// Load the scene parameters
	LeaveIcon = "Leave";
	C999_Common_Cuffs_HasKey = (PlayerHasInventory("CuffsKey"))
	LoadInteractions();
	
	// Set the correct starting stage
	if (PlayerHasLockedInventory("Cuffs") == true) C999_Common_Cuffs_CurrentStage = 10;
	else C999_Common_Cuffs_CurrentStage = 0;

	// If the player has a loose set of cuffs
	C999_Common_Cuffs_HasLooseCuffs = PlayerHasInventory("Cuffs");

}

// Chapter Common - Cuffs Run, we draw the regular player image if the item is on
function C999_Common_Cuffs_Run() {
	BuildInteraction(C999_Common_Cuffs_CurrentStage);
	if (PlayerHasLockedInventory("Cuffs") && (OveridenIntroImage == "")) DrawPlayerImage(150, 240);
}

// Chapter Common - Cuffs Click, allow regular interactions and clicking on another item
function C999_Common_Cuffs_Click() {
	OveridenIntroImage = "";
	ClickInteraction(C999_Common_Cuffs_CurrentStage);
	InventoryClick(GetClickedInventory(), LeaveChapter, LeaveScreen);
}

// Chapter Common - Self cuffs
function C999_Common_Cuffs_SelfCuff() {
	if ((Common_BondageAllowed) && (Common_SelfBondageAllowed)) {
		PlayerRemoveInventory("Cuffs", 1);
		PlayerLockInventory("Cuffs");
		C999_Common_Cuffs_HasLooseCuffs = PlayerHasInventory("Cuffs");
	} else {
		OveridenIntroText = GetText("BadTiming");
		C999_Common_Cuffs_CurrentStage = 0;
	}
}

// Chapter Common - Unlock
function C999_Common_Cuffs_Unlock() {
	PlayerAddInventory("Cuffs", 1);
	PlayerUnlockInventory("Cuffs");
}

// Chapter Common - Show the item image
function C999_Common_Cuffs_ShowImage() {
	OveridenIntroImage = "Cuffs.jpg";
}