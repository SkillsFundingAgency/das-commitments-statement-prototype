const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



// Re-direct from yes / no
router.post('/sprint-6/commitment-statement/2-employer-details/1a-training-details', function (req, res) {

    let TrainingConfirm = req.session.data['TrainingConfirm']

    console.log(req.session.data['TrainingConfirm'])

    //Yes
    if (TrainingConfirm === 'yes') {
        res.redirect('/sprint-6/commitment-statement/2-employer-details/1a-employer-details')
    }
    //No
    else if (TrainingConfirm === 'no') {
        res.redirect('/sprint-6/commitment-statement/2-employer-details/noconfirm-training')
    }

    //end
})

// Re-direct from yes / no
router.post('/sprint-6/commitment-statement/2-employer-details/1a-employer-details', function (req, res) {

    let EmployerConfirm = req.session.data['EmployerConfirm']

    console.log(req.session.data['EmployerConfirm'])

    //Yes
    if (EmployerConfirm === 'yes') {
        res.redirect('/sprint-6/commitment-statement/dashboard/2-my-apprenticeships')
    }
    //No
    else if (EmployerConfirm === 'no') {
        res.redirect('/sprint-6/commitment-statement/2-employer-details/noconfirm-employer')
    }

    //end
})


module.exports = router
