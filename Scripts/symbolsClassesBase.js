(function(ns1, ns2){
    'use strict';
    ns2.Cls = function Cls(){
        var init1 = (findElem = 'body')  =>  $(findElem).append(`<h2><pre><code class="language-javascript">Note1 : class MyClass1 {};</code></pre></h2></br>`),
        
        typeOfClass = (findElem = 'body') => $(findElem).append( `<li> Using the new \'class\' syntax :<b> typeof MyClass1 = ${typeof MyClass1}</b></li>`),
        
        typeOfClassInstance = (findElem = 'body') => {
            let obj = new MyClass1();
            // let html = ;
            let html = `<li> Instantiated class :<b> typeof obj = ${typeof obj}</b>
    <pre><code class="language-javascript">
    let obj = new MyClass1();
    let html = \`Instantiated class :<b> typeof obj = \${typeof obj}</b>\`
    \$(findElem).append(html);
    </code></pre>
    </li>`;
            $(findElem).append(html);
        },

        intanceofClass = (findElem = 'body') => {
            let obj = new MyClass1();
            let html = `<li><b>obj instanceof MyClass1 = ${obj instanceof MyClass1}</b>
    <pre><code class="language-javascript">
    let obj = new MyClass1();
    let html = \`<b>obj instanceof MyClass1 = \${obj instanceof MyClass1}</b>\`
    \$(findElem).append(html);
    </code></pre>
    </li>`;    
            $(findElem).append(html);    
        },

        init2 = (findElem = 'body') => {
            let html = `<h2><pre><code class="language-javascript">
Note2 :
class MyClass2 {
    showId(){
        return 99;
    };
};
</code></pre></h2></br>` 
            $(findElem).append(html);
        },

        objLiteralClassSyntax = (findElem = 'body') => {
            let obj = new MyClass2();
            let html = `<li>functions declared like object literal in classes : <b>obj.showId() = ${obj.showId()}</b>
    <pre><code class="language-javascript">
    let obj = new MyClass2();
    let html = \`functions declared like object literal in classes : <b>obj.showId() = \${obj.showId()}</b>\`
    \$(findElem).append(html);  
    </pre></code>
    </li>`

            $(findElem).append(html);  
        };



        class MyClass1 {

        };

        
        class MyClass2 {
            showId(){
                return 99;
            };
        };

        return {
            init1,
            typeOfClass,
            typeOfClassInstance,
            intanceofClass,
            init2,
            objLiteralClassSyntax
        };
    };

})(window.Gus = window.Gus || {}, 
    window.Gus.Classes =  window.Gus.Classes || {});