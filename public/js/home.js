(function(){
  Mustache.tags = ["<%", "%>"]
  var data = window.__PRELOADED__
  if (data == null)
    return

  var page = data.page
  if (page == null)
    return

  var interests = page.sidebar.interests.split(',')
  var interestsHtml = ''
  interests.forEach(function(interest){
    interestsHtml += '<li>'+interest.trim()+'</li>'
  })

  $('#interests-list').html(interestsHtml)


  var skillsHtml = ''
  var skillsTpl = $('#tpl-skill').html()
  var skills = page.section_5.skills.split(',')
  // console.log('SKILLS == ' + JSON.stringify(skills))
  skills.forEach(function(skillAndRating){
    var parts = skillAndRating.split(':')
    if (parts.length == 2){
      var skill = {name:parts[0], pct:parts[1]}
      skillsHtml += Mustache.render(skillsTpl, skill)
    }
  })

  $('#skillset-container').html(skillsHtml)
})()
