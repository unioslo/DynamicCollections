
// which repository
const REPOSITORY = "GENERIC";

// field names. can be swedish, norwegian, english
const LANGUAGE = "english";

// json file with objects list
const LISTFILE = "list_oslo.json";

// what to write in the meta/para data tables
const META = [
"OBJECTNAME",
"MUSEUM",
"INVENTORY",
"PLACE",
"MATERIAL1",
"MATERIAL2",
"WEIGHT",
"ENCUMBRANCE",
"CATEGORY1",
"CATEGORY2",
"TYPE",
"PERIOD1",
"PERIOD2",
"FINDPLACE",
"PARISH",
"DISTRICT",
"PROVINCE",
"REFERENCE",
"METADATA_AUTHOR",
"DESCRIPTION"
];

const PARA = [
"3D_OBJECT_ID",
"MEASURE_UNIT",
"POINTS_NUM",
"POLYGONS_NUM",
"TEXTURES_NUM",
"ACQUISITION_METHOD",
"DATE",
"3D_AUTHOR",
"SOFTWARE",
"SCANS_NUM",
"PICTURES_NUM",
"MODEL_NOTES"
];

// which fields are searched with free text search
const SEARCHFIELDS = [
"OBJECTNAME",
"INVENTORY",
"PLACE",
"MATERIAL1",
"MATERIAL2",
"CATEGORY1",
"CATEGORY2",
"TYPE",
"PERIOD1",
"PERIOD2",
"DESCRIPTION",
"FINDPLACE",
"PARISH",
"DISTRICT",
"PROVINCE",
"REFERENCE",
"METADATA_AUTHOR",
"MODEL_NOTES"
];

// options for filters
const ageFilterOptions = [
"ALL",
"old",
"contemporary",
];

const materialFilterOptions = [
"ALL",
"resin",
"ceramic",
"plaster",
"metal"
];

const collectionFilterOptions = [
"ALL",
"MMM",
"MM2"
];

const pageTitle = "BItFROST";

const siteHeader = `
	<p class='indexTitle px-2 my-2'><img src='./media/placeholder.png'; height=70px;>BItFROST</p>
	`;


const siteLogos =`
	<a href='https://www.uio.no/' target='_blank'><img src='./media/UO_logo.png' data-toggle='tooltip' data-placement='bottom' title='Universitetet i Oslo'></a>
	<a href='https://www.khm.uio.no/' target='_blank'><img src='./media/HM_logo.png' data-toggle='tooltip' data-placement='bottom' title='Kultuthistorisk Museum'></a>
	<a href='http://vcg.isti.cnr.it/' target='_blank'><img src='./media/CNR_logo.png' data-toggle='tooltip' data-placement='bottom' title='Visual Computing Lab'></a>
`;

const siteNews = `
		<p>
		<strong>22/12/2023 - test</strong></br>
		placeholder text.</br>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		<ul>
		<li>aaaa.</li>
		<li>bbbb.</li>
		<li>cccc.</li>
		</ul>
		<hr/>		
		</p>

		<p>
		For technical issues and bugs, please contact callieri@isti.cnr.it
		</p>
	`;

const siteInfo = `
		<p>
		This is an instance of <strong>Dynamic Collections</strong>, an initiative of DARKLab, Lund University, and Visual Computing Lab, ISTI-CNR.	
		</p>
		
		<p>		
		More info <a href="https://www.khm.uio.no/forskning/prosjekter/bitfrost/" target="_blank">here</a>.
		</p>

		<p>		
		More info <a href="https://www.darklab.lu.se/digital-collections/dynamic-collections/" target="_blank">here</a>
		</p>
	
		<hr/>
		
		<p>
		For citations in papers, please use:</br>
		<i>Ekengren F., Callieri M., Dininno D., Berggren &Aring;., Macheridis S., Dell'Unto N.</br>
		Dynamic Collections: A 3D Web Infrastructure for Creative Engagement.</i></br>
		Open Archaeology, 2021, ISSN:2300-6560, In press.</br>
		<a href="https://lup.lub.lu.se/search/publication/68f6dc85-105c-468b-b3cb-d4d001ca2393" target="_blank">[Lund University Publications]</a>
		</br></br>
		</p>
		
		<hr/>
		
		<p>
		For technical issues and bugs, please report on the github repository. https://github.com/unioslo/DynamicCollections
		</p>
	`;

// where to find images and model
function getLargeThumb(objCode) {
	var thumb = "./img/placeholder.png";
	if(ARCHIVE.objects[objCode]["THUMBNAIL_ID"] !== "")
		// thumb = ARCHIVE.objects[objCode]["DATA_LOCATION"] + ARCHIVE.objects[objCode]["THUMBNAIL_ID"] + "_512.png";
		thumb = "images/" + ARCHIVE.objects[objCode]["THUMBNAIL_ID"] + "_512.png";

	return thumb;
}

function getSmallThumb(objCode) {
	var thumb = "./img/placeholder.png";
	if(ARCHIVE.objects[objCode]["THUMBNAIL_ID"] !== "")
//		thumb = ARCHIVE.objects[objCode]["DATA_LOCATION"] + ARCHIVE.objects[objCode]["THUMBNAIL_ID"] + "_256.png";
		thumb = "images/" + ARCHIVE.objects[objCode]["THUMBNAIL_ID"] + "_256.png";	
	return thumb;
}

function getModelFile(objCode) {
	var modelFile;
	if(ARCHIVE.objects[objCode]["3D_OBJECT_ID"].constructor === Array){
		modelFile = [];
		ARCHIVE.objects[objCode]["3D_OBJECT_ID"].forEach((item, ind) => {
			let newM = ARCHIVE.objects[objCode]["DATA_LOCATION"] + "models/" + ARCHIVE.objects[objCode]["3D_OBJECT_ID"][ind] + ".nxz"
			modelFile.push(newM);		
		});
	}
	else {
		modelFile = [ARCHIVE.objects[objCode]["DATA_LOCATION"] + ARCHIVE.objects[objCode]["3D_OBJECT_ID"] + ".nxz"];
	}
	return modelFile;
}


