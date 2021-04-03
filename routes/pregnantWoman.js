const router = require('express').Router();
const verify = require('./verifyToken');

const PregnantWoman = require('../controllers/pregnantWoman')

router.post('/biodata/update', verify, PregnantWoman.updateBiodata);
router.post('/familyHistory/update', verify, PregnantWoman.updateFamilyHistory);
router.post('/obstetricHistory/update', verify, PregnantWoman.updateObstetricHistory);
router.post('/antenatalRecord/update', verify, PregnantWoman.updateAntenatalRecord);
router.post('/hIVHBRoutineRecord/update', verify, PregnantWoman.updateHIVHBRoutineRecord);
router.post('/maternalMedicalHistory/update', verify, PregnantWoman.updateMaternalMedicalHistory);
router.post('/medicalStaff/update', verify, PregnantWoman.updateMedicalStaff);
router.post('/pregnancyHistory/update', verify, PregnantWoman.updatePregnancyHistory);
router.post('/pregnancyInvestigation/update', verify, PregnantWoman.updatePregnancyInvestigation);
router.post('/updateSocialHistory/update', verify, PregnantWoman.updateSocialHistory);
router.post('/updateCurrentPregnancy/update', verify, PregnantWoman.updateCurrentPregnancy);

module.exports = router;
