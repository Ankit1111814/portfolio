#!/bin/bash

# Portfolio Profile Customization Script
# This script helps you personalize your portfolio with your information

echo "🎨 Portfolio Profile Customization"
echo "=================================="
echo ""

# Function to get user input with default value
get_input() {
    local prompt="$1"
    local default="$2"
    local input
    
    echo -n "$prompt [$default]: "
    read input
    echo "${input:-$default}"
}

# Function to update file content
update_content() {
    local file="$1"
    local search="$2"
    local replace="$3"
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s|$search|$replace|g" "$file"
    else
        # Linux
        sed -i "s|$search|$replace|g" "$file"
    fi
}

echo "Let's personalize your portfolio! Press Enter to keep default values."
echo ""

# Collect user information
NAME=$(get_input "Your full name" "Ankit Kumar")
TITLE=$(get_input "Your professional title" "Full Stack Developer")
EMAIL=$(get_input "Your email address" "your.email@example.com")
PHONE=$(get_input "Your phone number" "+1 (555) 123-4567")
LOCATION=$(get_input "Your location" "Your City, Country")
LINKEDIN=$(get_input "Your LinkedIn username" "yourlinkedin")
GITHUB=$(get_input "Your GitHub username" "yourgithub")
TWITTER=$(get_input "Your Twitter username" "yourtwitter")

# Professional information
YEARS_EXP=$(get_input "Years of experience" "3+")
PROJECTS_COUNT=$(get_input "Number of projects completed" "50+")
GRADUATION_YEAR=$(get_input "Graduation year range" "2018 - 2021")

echo ""
echo "🔄 Updating your portfolio..."

# Update HTML content
HTML_FILE="index.html"

# Update page title
update_content "$HTML_FILE" "Ankit - Full Stack Developer" "$NAME - $TITLE"

# Update navigation logo
update_content "$HTML_FILE" '<a href="#home">Ankit</a>' "<a href=\"#home\">$NAME</a>"

# Update hero section
update_content "$HTML_FILE" '<span class="name">Ankit</span>' "<span class=\"name\">$NAME</span>"
update_content "$HTML_FILE" '<span class="role">Full Stack Developer</span>' "<span class=\"role\">$TITLE</span>"

# Update profile image alt text
update_content "$HTML_FILE" 'alt="Ankit"' "alt=\"$NAME\""

# Update about section stats
update_content "$HTML_FILE" '<span class="stat-number">3+</span>' "<span class=\"stat-number\">$YEARS_EXP</span>"
update_content "$HTML_FILE" '<span class="stat-number">50+</span>' "<span class=\"stat-number\">$PROJECTS_COUNT</span>"

# Update timeline graduation
update_content "$HTML_FILE" '<span class="timeline-date">2018 - 2021</span>' "<span class=\"timeline-date\">$GRADUATION_YEAR</span>"

# Update contact information
update_content "$HTML_FILE" "ankit@example.com" "$EMAIL"
update_content "$HTML_FILE" "+91 98765 43210" "$PHONE"
update_content "$HTML_FILE" "<p>India</p>" "<p>$LOCATION</p>"

# Update footer
update_content "$HTML_FILE" "© 2024 Ankit. All rights reserved." "© 2024 $NAME. All rights reserved."

echo "✅ HTML updated successfully!"

# Update JavaScript chatbot responses
JS_FILE="assets/js/script.js"

update_content "$JS_FILE" "What would you like to know about Ankit?" "What would you like to know about $NAME?"
update_content "$JS_FILE" "Ankit has 3+ years of experience" "$NAME has $YEARS_EXP years of experience"
update_content "$JS_FILE" "Ankit is skilled in React" "$NAME is skilled in React"
update_content "$JS_FILE" "You can check out Ankits amazing projects" "You can check out ${NAME}'s amazing projects"
update_content "$JS_FILE" "You can reach Ankit through the contact form, email at ankit@example.com" "You can reach $NAME through the contact form, email at $EMAIL"
update_content "$JS_FILE" "You can download Ankits resume" "You can download ${NAME}'s resume"
update_content "$JS_FILE" "Ankit has a Bachelors degree" "$NAME has a Bachelor's degree"
update_content "$JS_FILE" "explore more about Ankit through" "explore more about $NAME through"
update_content "$JS_FILE" "I'm Ankit's virtual assistant" "I'm ${NAME}'s virtual assistant"

echo "✅ JavaScript updated successfully!"

# Create social media links update (this would need manual updating in HTML)
echo ""
echo "📱 Social Media Links (update these manually in index.html):"
echo "   LinkedIn: https://linkedin.com/in/$LINKEDIN"
echo "   GitHub: https://github.com/$GITHUB"
echo "   Twitter: https://twitter.com/$TWITTER"

# Create a custom profile summary
echo ""
echo "✍️  Creating your custom profile description..."

cat > temp_profile.txt << EOF
I'm a passionate $TITLE with a love for creating innovative 
digital solutions. My journey in web development started with curiosity 
and has evolved into a career where I get to build amazing user experiences 
every day. I believe in writing clean, maintainable code and staying 
up-to-date with the latest technologies.
EOF

# Update the about description
PROFILE_DESC=$(cat temp_profile.txt | tr '\n' ' ')
update_content "$HTML_FILE" "I'm a passionate Full Stack Developer with a love for creating innovative digital solutions. My journey in web development started with curiosity and has evolved into a career where I get to build amazing user experiences every day. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies." "$PROFILE_DESC"

rm temp_profile.txt

echo "✅ Profile description updated!"

echo ""
echo "🎉 Profile customization complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Replace 'assets/images/profile.jpg' with your professional photo"
echo "   2. Update 'assets/resume.pdf' with your actual resume"
echo "   3. Add your project screenshots to 'assets/projects/' folder"
echo "   4. Update project information in the HTML file"
echo "   5. Update social media links in the contact section"
echo ""
echo "🚀 Your personalized portfolio is ready!"
echo "   Run './launch.sh' to view your updated portfolio"
