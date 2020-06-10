import forest from "../../assets/images/forest.jpg"

const DemoPost = {
    title: "Some demo post",
    subtitle: "Some subtitle",
    path:"demo_post",
    previewImage: forest,
    content: [
        {
            type: "title",
            content: "Some demo post",
        },
        {
            type: "subtitle",
            content: "Some subtitle",
        },
        {
            type: "text",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum urna est, a vulputate arcu vulputate varius. Integer in pretium lorem. Fusce sed scelerisque felis. Nam magna orci, mollis eget suscipit vel, molestie id libero. Nulla in dui vulputate, condimentum nulla nec, congue sem. Quisque justo nisi, volutpat non velit in, aliquam placerat risus. Morbi auctor mauris id interdum laoreet."
        },
        {
            type:"fullimage",
            src:forest
        },
        {
            type: "text",
            content:"Praesent sagittis feugiat tellus, eget malesuada leo fringilla vitae. Donec vestibulum condimentum purus, quis rhoncus nulla condimentum eget. Nam sit amet tellus justo. Nullam tristique eu urna vitae sagittis. Curabitur dolor sapien, venenatis vel posuere sed, auctor sodales sem. Maecenas quis mollis lorem, a sagittis lorem. Morbi cursus, ex at egestas porttitor, metus urna posuere mauris, at lobortis lacus erat sit amet nibh. Donec volutpat quis dolor ut malesuada. Vivamus pharetra et erat et volutpat."
        },
        {
            type:"list",
            content:["List item 1","List item 2","List item 3"]
        },
        {
            type: "text",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia id sapien eget tincidunt. Vivamus elementum mi urna, ac feugiat nunc sollicitudin eu. Morbi in semper ligula. Quisque vel lorem commodo, venenatis neque in, finibus sapien. Quisque placerat odio id ipsum venenatis, sed condimentum libero tempus. Sed tempus nisl eget justo venenatis cursus. Maecenas eleifend, nisl nec euismod bibendum, purus nisl vestibulum orci, non lacinia eros nibh id ante. Morbi quis ultrices lectus. Nunc mi eros, luctus sed tortor a, facilisis vestibulum metus. Aenean gravida turpis ac mauris condimentum, eu auctor velit ornare. Etiam quis mi quam."
        },
        {
            type:"sectionbreak"
        },
        {
            type:"text",
            content:"Nunc blandit in ligula at rutrum. Cras fermentum nisi tincidunt aliquam rhoncus. Aliquam nec leo facilisis, rhoncus urna a, euismod neque. Suspendisse quis pulvinar ligula. Aliquam nibh tellus, accumsan eget iaculis at, condimentum eget diam. Vivamus id sapien feugiat, vehicula lacus a, mattis elit. Praesent luctus turpis orci, rutrum sagittis turpis sagittis at. Aenean ornare et nisi aliquam elementum. Vestibulum vitae libero ac lorem blandit luctus nec ac lectus. Aenean in gravida turpis, efficitur faucibus felis. Nunc finibus, magna quis varius mattis, nulla eros tincidunt ligula, nec rhoncus orci ex sed leo. Sed lorem est, imperdiet eu massa id, pulvinar pulvinar dui. Nunc laoreet urna non libero vulputate euismod. Nunc tempor euismod libero, luctus fermentum massa convallis et. Etiam porta eros at massa lacinia, a sagittis lectus consequat. Cras quam ligula, faucibus vel tortor at, mollis faucibus arcu. Nunc blandit in ligula at rutrum. Cras fermentum nisi tincidunt aliquam rhoncus. Aliquam nec leo facilisis, rhoncus urna a, euismod neque. Suspendisse quis pulvinar ligula. Aliquam nibh tellus, accumsan eget iaculis at, condimentum eget diam. Vivamus id sapien feugiat, vehicula lacus a, mattis elit. Praesent luctus turpis orci, rutrum sagittis turpis sagittis at. Aenean ornare et nisi aliquam elementum. Vestibulum vitae libero ac lorem blandit luctus nec ac lectus. Aenean in gravida turpis, efficitur faucibus felis. Nunc finibus, magna quis varius mattis, nulla eros tincidunt ligula, nec rhoncus orci ex sed leo. Sed lorem est, imperdiet eu massa id, pulvinar pulvinar dui. Nunc laoreet urna non libero vulputate euismod. Nunc tempor euismod libero, luctus fermentum massa convallis et. Etiam porta eros at massa lacinia, a sagittis lectus consequat. Cras quam ligula, faucibus vel tortor at, mollis faucibus arcu."
        },
        {
            type:"normalimage",
            src:"https://images.unsplash.com/photo-1460186136353-977e9d6085a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1350&q=80"
        },
    ]
};

export default DemoPost;