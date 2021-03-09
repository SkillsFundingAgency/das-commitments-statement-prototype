const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Re-direct from yes / no
router.post('/sprint-6/commitment-statement/2-employer-details/1a-training-details', function (req, res) {
    let TrainingConfirm = req.session.data['TrainingConfirm']

    if (TrainingConfirm === 'yes') {
        res.redirect('/sprint-6/commitment-statement/dashboard/2-my-apprenticeships')
    }
    else if (TrainingConfirm === 'no') {
        res.redirect('/sprint-6/commitment-statement/2-employer-details/noconfirm-training')
    }
})

// Re-direct from yes / no
router.post('/sprint-6/commitment-statement/2-employer-details/1a-employer-details', function (req, res) {
    let EmployerConfirm = req.session.data['EmployerConfirm']

    if (EmployerConfirm === 'yes') {
        res.redirect('/sprint-6/commitment-statement/dashboard/2-my-apprenticeships')
    }
    else if (EmployerConfirm === 'no') {
        res.redirect('/sprint-6/commitment-statement/2-employer-details/noconfirm-employer')
    }
})

// Re-direct from yes / no
router.post('/sprint-6/commitment-statement/1-apprenticeship-details/1-apprenticeship-details', function (req, res) {
    let AppDetails = req.session.data['AppDetails']

    if (AppDetails === 'yes') {
          res.redirect('/sprint-6/commitment-statement/dashboard/2-my-apprenticeships')
    }
    else if (AppDetails === 'no') {
        res.redirect('/sprint-6/commitment-statement/1-apprenticeship-details/noconfirm-app-details')
    }
})



// 2 Training Info Re-direct from yes / no
router.post('/sprint-6/commitment-statement/1-apprenticeship-details/1-apprenticeship-training', function (req, res) {
    let TraininfoConfirm = req.session.data['TraininfoConfirm']

    if (TraininfoConfirm === 'yes') {
          res.redirect('/sprint-6/commitment-statement/dashboard/2-my-apprenticeships')
    }
    else if (TraininfoConfirm === 'no') {
        res.redirect('/sprint-6/commitment-statement/1-apprenticeship-details/noconfirm-app-details')
    }
})



module.exports = router
