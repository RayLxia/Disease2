<li class="projects-box">
                            <h3><a href="{dede:field name='typeurl'/}" target="_blank">{dede:field name='typename'/}</a></h3>
                            <ul class="projects clearfix">
                                {dede:arclist titlelen='42' row='20'}
                                    <li>
                                        <a href="[field:arcurl /]" target="_blank">
                                            [field:title /]
                                        </a>
                                    </li>
                                {/dede:arclist}
                            </ul>
                        </li>