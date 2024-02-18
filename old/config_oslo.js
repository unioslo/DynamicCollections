
// which repository
const REPOSITORY = "OSLO";

// field names. can be swedish, norwegian, english
const LANGUAGE = "norwegian";

// json file with objects list
const LISTFILE = "list_oslo.json";

// what to write in the meta/para data tables
const META = [
"MUSEUM",
"INVENTORY",
"PLACE",
"MATERIAL1",
"MATERIAL2",
"WEIGHT",
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
"METADATA_AUTHOR"
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
"SOFTWARE2",
"SCANS_NUM",
"PICTURES_NUM"
];

// which fields are searched with free text search
const SEARCHFIELDS = [
"INVENTORY",
"PLACE",
"MATERIAL1",
"MATERIAL2",
"CATEGORY1",
"CATEGORY2",
"CATEGORY3",
"TYPE",
"PERIOD1",
"PERIOD2",
"DESCRIPTION",
"FINDPLACE",
"PARISH",
"DISTRICT",
"PROVINCE",
"REFERENCE",
"METADATA_AUTHOR"
];

// options for filters
const ageFilterOptions = [
"ALL",
"Vikingtid",
"Eldre jernalder",
"Merovingertid",
"Folkevandringstid",
"Eldre steinalder",
"Steinalder",
"Middelalder"
];

const materialFilterOptions = [
"ALL",
"Tre",
"Kobber",
"Bronse",
"Kobberlegering",		  
"Gull",
"Jern",
"S&oslash;lv",
"Rav",
"Niello",
"Glass",
"Granat",
"Bergart",
"Skifer",
"Messing"
];

const collectionFilterOptions = [
"ALL",
"KHM"
];

const siteHeader = `
	<p class='indexTitle px-2 my-2' style='font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;'><img src='./media/bitfrost.png'; height=70px;> BItFROST</p>
	`;


const siteLogos =`
	<a href='https://www.uio.no/' target='_blank'><img src='./media/UO_logo.png' data-toggle='tooltip' data-placement='bottom' title='Universitetet i Oslo'></a>
	<a href='https://www.khm.uio.no/' target='_blank'><img src='./media/HM_logo.png' data-toggle='tooltip' data-placement='bottom' title='Kultuthistorisk Museum'></a>
	<a href='http://vcg.isti.cnr.it/' target='_blank'><img src='./media/CNR_logo.png' data-toggle='tooltip' data-placement='bottom' title='Visual Computing Lab'></a>
`;

const siteNews = `
		<p>
		<strong>20/05/2021 - first version</strong></br>
		First working prototype.
		<ul>
		<li>50 objects with Meta- and Para-data.</li>
		<li>Basic filtering and searching.</li>
		<li>Collection management (export/import), notes at collection and object level.</li>
		<li>Single Object 3D viewer with multiple rendering modes and interaction tools.</li>
		<li>Objects annotations with Views and Spots (export/import and collection).</li>
		</ul>
		</p>
		
		<hr/>

		<p>
		For technical issues and bugs, please contact callieri@isti.cnr.it
		</p>
	`;

const siteInfo = `
		<p>
		<strong>BItFROST</strong> is an initiative of the Museum of Cultural History University of Oslo, University of Oslo, in collaboration with the Visual Computing Lab, ISTI-CNR.
		</p>
		
		<p>		
		More info <a href="https://www.khm.uio.no/forskning/prosjekter/bitfrost/" target="_blank">here</a>.
		</p>
		
		<p>
		Online System: <strong>Copyright (C) 2021</strong> - Museum of Cultural History of Oslo, ISTI-CNR. All rights reserved.</br>
		Objects data, metadata, paradata: CC 4.0 BY-SA.</br>
		</p>

		<p>
		This online publishing experimentation is based on the <a href="https://www.darklab.lu.se/digital-collections/dynamic-collections/" target="_blank">Dynamic Collections</a> project.
		</p>

		
		<hr/>
		
		<p>
		<strong>Project partners</strong>
		<ul>
		<li>Museum of Cultural History, University of Oslo</li>
		<li>Lund University Digital Archaeology Laboratory - DARKLab</li>
		<li>Visual Computing Lab, Institute for Information Science and Technologies National Research Council - ISTI-CNR</li>
		<li>Institute of Media and Communication, University of Oslo</li>
		<li>Institute of Archaeology, History and Conservation Studies, University of Oslo</li>		
		</ul>
		</p>

		<hr/>

		<p>
		<strong>Participants</strong></br>
		Bjarte Aarseth, Letizia Bonelli, Justin Kimball, Nicol&ograve; Dell&apos;Unto, Marco Callieri, Espen Uleberg
		</p>

		<hr/>
		
		<p>
		For technical issues and bugs, please contact callieri@isti.cnr.it
		</p>
	`;



// where to find images and model
function getLargeThumb(objCode) {
	var thumb = "./img/placeholder.png";
	thumb = "../images/" + ARCHIVE.objects[objCode]["THUMBNAIL"];
	return thumb;
}

function getSmallThumb(objCode) {
	var thumb = "./img/placeholder.png";
	thumb = "../images/" + ARCHIVE.objects[objCode]["THUMBNAIL"];
	return thumb;	
}

function getModelFile(objCode) {
	var modelFile = "./models/sphere.ply";
	modelFile = ARCHIVE.objects[objCode]["DATA_LOCATION"] + "models/" + ARCHIVE.objects[objCode]["3D_OBJECT_ID"] + ".nxz";
	return modelFile;
}
