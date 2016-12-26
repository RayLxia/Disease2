<dl>
    <dt>一级标题:<a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a></dt>
    <dd>二级标题:[field:name/]</dd>
    <dd>
        {dede:arclist titlelen='42' row='20'}
        <ul class='autod'>
             <li>
                文章标题: <a href="[field:arcurl /]">
                   [field:title /]
                 </a>
            </li>
        </ul>
        {/dede:arclist}
    </dd>
</dl>